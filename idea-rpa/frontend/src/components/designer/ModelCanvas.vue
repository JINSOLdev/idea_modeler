<template>
  <div>
        <v-app-bar
                elevation="0"
                app
                fixed
                style="left: 0px;
                    background-color: transparent;
                    z-index: 1;
                    border-bottom: 1px solid #dedede;"
        >
            <v-btn text @click="$router.push('/')">
                Main
            </v-btn>
            <v-toolbar-title></v-toolbar-title>

            <v-spacer></v-spacer>
            <v-text-field
                    v-model="taskName"
                    label="Task Name"
                    style="max-width: 300px; margin-top: 25px;"
            ></v-text-field>

            <v-btn @click="openVariableDialog"
                    text
                    color="orange"
            >
                <v-icon>mdi-variable-box</v-icon>
                Variables
            </v-btn>

            <v-btn @click="openScriptPanel"
                    text
                    color="primary"
        >
                <v-icon>mdi-script-text</v-icon>
                Robot
            </v-btn>
            
            <execute-python 
                    :task="robot"
                    @record="getRecordResult"
                    @showOverlay="showOverlay"
                    @openExecute="openExecutePanel"
                    @executeResult="getExecuteResult"
                    @endExecution="endExecution"
                    @openAlert="openAlert"
            ></execute-python>

            <v-btn @click="saveModel"
                    text
                    color="purple" 
            >
                <v-icon>mdi-content-save</v-icon>
                Save
            </v-btn>
        </v-app-bar>

        <v-overlay v-model="isOverlay" style="z-index: 10;">
            <v-progress-circular indeterminate></v-progress-circular>
        </v-overlay>

        <v-main>
            <v-container 
                    @click="closePanel"
                    @contextmenu.prevent="openContextMenu($event, null)"
            >
                <v-alert 
                        outlined
                        dismissible
                        :type="alertObj.type"
                        v-model="alertObj.status"
                >
                    {{ alertObj.msg }}
                </v-alert>

                <v-sheet
                        class="mx-auto"
                        height="30"
                        width="500"
                        :rounded="'xl'"
                        color="blue"
                >
                    Start
                </v-sheet>
                
                <!-- Tasks -->
                <draggable 
                        tag="ul"
                        :list="robot.child"
                        :move="startMoveElement"
                        group="task"
                        class="drag-area"
                >
                    <div v-for="task in robot.child" 
                            :key="task.id"
                    >
                        <model-relation
                                :targetTask="task"
                        ></model-relation>
                        
                        <li class="task-element"
                                @dblclick="openPanel($event, task)"
                                @contextmenu.prevent="openContextMenu($event, task)"
                                :class="{ 'selected' : selectedValue && selectedValue.id == task.id }"
                        >
                            <component
                                    :is="getComponentName(task)"
                                    :child.sync="task.child"
                                    :value.sync="task"
                                    :isOpenMenu.sync="isOpenMenu"
                                    :isOpenPanel.sync="isOpenPanel"
                                    @openPanel="openPanel"
                                    @openContextMenu="openContextMenu"
                            ></component>
                        </li>
                    </div>
                </draggable>
                
                <v-sheet
                        class="mx-auto mt-5"
                        height="30"
                        width="500"
                        :rounded="'xl'"
                        color="blue"
                >
                    End
                </v-sheet>
            </v-container>
        </v-main>

        <!-- Element List -->
        <element-list
                ref="elementList"
                @updateKeywords="updateKeywords"
                @closeMenu="closeContextMenu"
        ></element-list>

        <!-- Variables Dialogs -->
        <v-dialog v-model="variableDialog" max-width="800">
            <variables-dialog
                    :value.sync="robot"
                    @closeVariableDialog="closeVariableDialog"
                    @updateVariables="updateVariables"
            ></variables-dialog>
        </v-dialog>

        <!-- Robot Script Panel -->
        <robot-script-panel
                v-if="isOpenScript"
                :robot.sync="robot"
                v-click-outside="closeScriptPanel"
        ></robot-script-panel>

        <!-- Execute Panel-->
        <execute-panel
                v-if="isOpenExecute"
                :taskName.sync="taskName"
                :resultText.sync="executeResultText"
                :isExecuting.sync="isExecuting"
                @close="closeExecutePanel"
        ></execute-panel>

        <!-- Context Menu -->
        <v-menu v-model="isOpenMenu"
                :position-x="menuStyle.x"
                :position-y="menuStyle.y"
                absolute
                offset-y
        >
            <v-list>
                <v-list-item v-if="selectedValue && selectedValue != null">
                    <v-list-item-title @click.capture="deleteElement">
                        Delete
                    </v-list-item-title>
                </v-list-item>
                <v-list-item v-if="selectedValue && selectedValue != null">
                    <v-list-item-title @click.capture="copyElement">
                        Copy
                    </v-list-item-title>
                </v-list-item>
                <v-list-item v-if="tmpObject">
                    <v-list-item-title @click.capture="pasteElement($event)">
                        Paste
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>

        <!-- Property Panel -->
        <model-panel
                v-if="isOpenPanel"
                :value="selectedValue"
                @close="closePanel"
        ></model-panel>
    </div>
</template>

<script lang="ts">

    import Draggable from 'vuedraggable';
    import { Watch, Component, Vue } from 'vue-property-decorator';
    import { Robot, Task, Keyword, Variable } from '../../types/Task';

    import ElementList from './modeling/ElementList.vue';
    import RobotScriptPanel from './modeling/RobotScriptPanel.vue';
    import VariablesDialog from './modeling/VariablesDialog.vue';
    import ExecutePanel from './modeling/ExecutePanel.vue';
    import ExecutePython from './modeling/elements/util/ExecutePython.vue';
    import ModelRelation from './modeling/ModelRelation.vue';

    import ControlElement from './modeling/elements/control/ControlElement.vue';
    import KeywordElement from './modeling/elements/keyword/KeywordElement.vue';
    import ModelPanel from './modeling/elements/panels/CommonPanel.vue';

    import fs from 'fs';

    var changeCase = require('change-case');

    @Component({
        components: {
            Draggable,
            ElementList,
            RobotScriptPanel,
            VariablesDialog,
            ExecutePanel,
            ControlElement,
            KeywordElement,
            ModelPanel,
            ExecutePython,
            ModelRelation,
        },
    })
    export default class ModelCanvas extends Vue {
        // Data
        robot: Task = new Robot(1, 'New Task', 'Task', []);
        isOpenPanel: boolean = false;
        isOpenMenu: boolean = false;
        menuStyle: any = {};
        selectedValue: any = null;
        isOpenScript: boolean = false;
        isOpenExecute: boolean = false;
        isExecuting: boolean = false;
        isOverlay: boolean = false;
        variableDialog: boolean = false;
        executeResultText: any = '';
        tmpObject: any = null;
        alertObj: any = {
            type: "info",
            msg: "",
            status: false,
        }

        $refs!: {
            elementList: ElementList;
        };

        get taskName() {
            return this.robot.getName();
        }
        set taskName(newVal: any) {
            this.robot.setName(newVal);
        }

        // Watch
        @Watch('robot', { immediate: true, deep: true })
        updateRobot(val: any) {
            if (val) {
                val.name = this.taskName;
                this.$set(this, "isOpenScript", false)
            }
        }

        @Watch('isOpenMenu', { immediate: true, deep: true })
        menuStatus(val: any) {
            if (!val) {
                this.$set(this, "selectedValue", null)
            }
        }

        mounted() {
            let me = this

            try {
                let path: any
                const location = window.localStorage.getItem("location")

                if (me.$route.params.filePath) {
                    path = me.$route.params.filePath
                } else if (location) {
                    path = `${location}\\${me.$route.params.taskName}.json`
                }

                if (path) {
                    fs.access(path, (e) => {
                        fs.readFile(path, async (err, data) => {
                            if (err) console.error(err);
                            if (!data || !data.toString()) { return }
                            
                            let loadData = JSON.parse(data.toString());
                            if (!loadData.robot) {
                                var obj = {
                                    status: true,
                                    type: "warning",
                                    msg: "This file is not a robot task. Create a new robot task."
                                }
                                me.openAlert(obj)
                                return 
                            } else {
                                let data
                                if (loadData.child) {
                                    data = loadData
                                } else {
                                    data = loadData.robot
                                }
                                data.child = await me.cloneChild(data.child)

                                const tmpRobot = new Robot(data.id, data.name, data.type, data.child)
                                tmpRobot.setProperty({
                                    "keywords": me.robot.getKeywords()
                                })
                                tmpRobot.setProperty({
                                    "variables": me.setVariables(data.variables)
                                })
                                
                                me.robot = tmpRobot
                            }
                        });
                    });
                }
            } catch (e) {
                console.log(e)
            }
        }

        // Methods
        startMoveElement(e: any) {
            e.draggedRect.width = 100
        }

        saveModel() {
            let direactoryPath, filePath;
            if (this.$route.params.filePath) {
                direactoryPath = this.$route.params.filePath.replace(this.taskName + ".json", "");
                filePath = this.$route.params.filePath;
            } else {
                direactoryPath = `./tasks`;
                filePath = `${direactoryPath}/${this.taskName}.json`;
            }

            const data = {
                path: filePath,
                robot: this.robot
            }
            !fs.existsSync(direactoryPath) && fs.mkdirSync(direactoryPath);
            fs.writeFileSync(filePath, JSON.stringify(data));
        }

        deleteElement() {
            var newChild = this.robot.delChild(this.selectedValue, this.robot.child);
            this.$set(this.robot, "child", newChild);

            if (this.selectedValue.type == "DefinitionKeyword") {
                this.robot.delKeyword(this.selectedValue);
            }
            this.$set(this, "isOpenMenu", false);
        }

        getRecordResult(result: any) {
            var keywordList = this.$refs.elementList.keywordList

            result.forEach((str: string) => {
                if (str) {
                    if (str.includes("Click") || str.includes("Control Window")) {
                        keywordList.forEach((item: any) => {
                            item.list.forEach((keyword: string) => {
                                if (str.includes(keyword)) {
                                    const element = new Keyword(this.$refs.elementList.idGlobal++, keyword, "Keyword")
                                    element.library = item.library
                                    const locator = this.setLocator(str.replace(keyword, "").trim())
                                    element.property = new Map()
                                    this.$set(element.property, "locator", locator)
                                    this.robot.child.push(element)
                                }
                            })
                        })
                    }
                }
            })
        }

        setLocator(str: string): any {
            var obj: any = {
                name: "ref",
                valueType: "locator",
                defaultValue: str,
            }
            
            if(str.includes("id:")) {
                obj.name = "id"
                var idArr: any = str.split("id:")
                var idVal: any = idArr.pop()

                if(idVal?.includes(" and ")) {
                    idArr = idVal?.split(" and ")
                    obj.defaultValue = idArr.shift()
                } else {
                    obj.defaultValue = idVal
                }
            }

            if (str.includes("class:")) {
                obj.name = "class"
                var classArr: any = str.split("class:")
                var classVal: any = classArr.pop()

                if(classVal?.includes(" and ")) {
                    classArr = classVal?.split(" and ")
                    obj.defaultValue = classArr.shift()
                } else {
                    obj.defaultValue = classVal
                }
            }

            return obj
        }
        showOverlay(value: boolean) {
            this.$set(this, "isOverlay", value)
        }

        openAlert(obj: any) {
            var tmpObj = {
                type: obj.type,
                msg: obj.msg,
                status: obj.status
            }
            this.$set(this, "alertObj", tmpObj)
        }

        getExecuteResult(result: any) {
            if (result && result != undefined && result != null) {
                if (result.includes("*** Tasks ***") &&
                    result.includes("==============================================================================")
                ) {
                    this.executeResultText = this.robot.toRobot(0).replace(/\t/g, "    ");
                    this.executeResultText += "==============================================================================\n"
                    + "My Test Case\n"
                    + "==============================================================================\n"

                } else {
                    this.executeResultText += result.replace("undefined", "")
                }
            }
        }
        endExecution() {
            this.$set(this, "isExecuting", false)
        }
        openExecutePanel() {
            this.$set(this, "executeResultText", "")
            this.$set(this, "isExecuting", true)
            this.$set(this, "isOpenExecute", true)
        }
        closeExecutePanel() {
            this.$set(this, "isOpenExecute", false)
        }

        getComponentName(task: any): string {
            if (task.type == 'DefinitionKeyword') {
                return 'keyword-element';
            } else if (task.type == 'Keyword') {
                if(task.name.includes('JSON')) {
                    var name = task.name.replace('JSON', 'J S O N')
                    return this.kebabCase(name);
                } else if (task.name == 'Select') {
                    return task.name
                }
                return this.kebabCase(task.name);
            } else {
                return task.type;
            }
        }

        kebabCase(str: string) {
            const result = str
                .replace(/([a-z])([A-Z])/g, '$1-$2')
                .replace(/[\s_]+/g, '-')
                .toLowerCase();
            return result;
        }

        camelCase(str: string) {
            const result = changeCase.camelCase(str);
            return result;
        }

        pascalCase(str: string) {
            const result = changeCase.pascalCase(str);
            return result;
        }

        updateKeywords(keyword: any) {
            this.robot.setProperty({ "keywords": keyword })
        }

        openScriptPanel() {
            this.$set(this, "isOpenScript", true)
        }
        closeScriptPanel() {
            this.$set(this, "isOpenScript", false)
        }

        openVariableDialog() {
            this.$set(this, "variableDialog", true)
        }
        closeVariableDialog() {
            this.$set(this, "variableDialog", false)
        }
        updateVariables(variables: any) {
            this.robot.setProperty({ 'variables': variables });
        }
        
        openContextMenu(evt: any, value: any) {
            evt.preventDefault()
            evt.cancelBubble  = true
            if (evt.stopPropagation) {
                evt.stopPropagation()
            }
            if(value) {
                this.$set(this, "selectedValue", value)
            } else {
                this.$set(this, "selectedValue", null)
            }
            
            this.$set(this.menuStyle, "x", evt.clientX)
            this.$set(this.menuStyle, "y", evt.clientY)
            this.$set(this, "isOpenMenu", true)
            this.$set(this, "isOpenPanel", false)
        }
        closeContextMenu() {
            this.$set(this, "isOpenMenu", false)
        }

        openPanel(evt: any, value: any) {
            evt.cancelBubble  = true
            if (evt.stopPropagation) {
                evt.stopPropagation()
            }
            this.$set(this, "isOpenPanel", true)
            this.$set(this, "selectedValue", value)
        }
        closePanel() {
            if (this.isOpenPanel) {
                this.$set(this, "isOpenPanel", false)
                this.$set(this, "selectedValue", null)
            }
        }

        copyElement() {
            this.$set(this, "isOpenMenu", false)
            this.$set(this, "tmpObject", JSON.parse(JSON.stringify(this.selectedValue)))
            this.$delete(this.tmpObject, "id")
        }
        pasteElement(e: any) {
            this.$set(this, "isOpenMenu", false)

            try {
                var newEl = this.$refs.elementList.cloneElement(this.tmpObject)
                if (newEl.library) { newEl.library = newEl.library }
                newEl.property = this.tmpObject.property
                newEl.child = this.cloneChild(this.tmpObject.child)

                if (this.selectedValue && this.selectedValue.type != "Keyword") {
                    if (this.selectedValue.type == "IfTask" || this.selectedValue.type == "TryExceptTask") {
                        // this.selectedValue.child.push(newEl)
                    } else {
                        this.selectedValue.child.push(newEl)
                    }
                } else {
                    this.robot.child.push(newEl)
                }

            } catch (e) {
                console.error(e)
            }
        }

        cloneChild(child: any): any {
            var newChild: any[] = []

            if (child.length > 0) {
                child.forEach((childEl: any) => {
                    var clone = this.$refs.elementList.cloneElement(childEl)
                    this.$set(clone, "property", childEl.property)

                    if (this.cloneChild(childEl.child).length > 0) {
                        clone.child = this.cloneChild(childEl.child)
                    }

                    if (clone.type == "IfTask") {
                        clone.property.conditions.forEach((condition: any) => {
                            condition.child = this.cloneChild(condition.child)
                        })
                    }
                    newChild.push(clone)
                })
            }
            return newChild
        }

        setVariables(variables: any) {
            var newVars: any[] = []
            if (variables && variables.length > 0) {
                variables.forEach((varItem: any) => {
                    var newVar = new Variable(varItem.name, varItem.valueType, varItem.defaultValue)
                    newVars.push(newVar)
                })
            }
            return newVars
        }
    }
</script>

<style scoped>
    .container {
        text-align: center;
        max-width: 900px;
    }

    .drag-area {
        list-style: none;
        min-height: 500px;
        padding: 0px;
        cursor: pointer;
    }

    .task-element {
        min-height: 30px;
        list-style: none;
        outline: 1px solid;
    }

    .selected {
        border: 1px solid #2196F3;
    }

</style>
