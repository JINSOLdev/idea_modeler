<template>
    <div>
      <v-app-bar
        elevation="0"
        app
        fixed
        style="left: 0px; background-color: transparent; z-index: 1"
      >
        <v-toolbar-title></v-toolbar-title>
   
        <v-spacer></v-spacer>
        <v-text-field
          v-model="taskName"
          label="Task Name"
          style="max-width: 300px; margin-top: 25px"
        ></v-text-field>
   
        <v-btn text color="orange" @click="openVariableDialog">
          <v-icon>mdi-variable-box</v-icon>
          Variables
        </v-btn>
   
        <v-btn text color="primary" @click="openScriptPanel">
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
        ></execute-python>
        <v-btn text color="green" @click="saveModel">
          <v-icon>mdi-content-save</v-icon>
          Save
        </v-btn>
      </v-app-bar>
   
      <v-overlay v-model="isOverlay">
        <v-progress-circular indeterminate></v-progress-circular>
      </v-overlay>
   
      <v-main>
        <v-container
          @click="closePanel"
          @contextmenu="openContextMenu($event, null)"
        >
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
          <draggable tag="ul" :list="robot.child" group="task" class="dragArea">
            <div v-for="task in robot.child" :key="task.id">
              <model-relation :targetTask="task"></model-relation>
              <li
                class="task-element"
                @dblclick="openPanel($event, task)"
                @contextmenu="openContextMenu($event, task)"
              >
                <component
                  :is="getComponentName(task)"
                  :ref="camelCase(task.name)"
                  :child="task.child"
                  :value="task"
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
        @updateKeywords="updateKeywords"
        ref="elementList"
      ></element-list>
   
      <!-- Variables Dialogs -->
      <v-dialog v-model="variableDialog" max-width="800">
        <variables-dialog
          :value.sync="robot"
          @updateVariables="updateVariables"
        ></variables-dialog>
      </v-dialog>
   
      <!-- Robot Script Panel -->
      <robot-script-panel
        v-if="isOpenScript"
        :robot.sync="robot"
        v-click-outside="closeScriptPanel"
        @addElement="addElement"
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
      <v-menu
        v-model="isOpenMenu"
        :position-x="menuStyle.x"
        :position-y="menuStyle.y"
        absolute
        offset-y
      >
        <v-list>
          <v-list-item v-if="selectedValue" link>
            <v-list-item-title @click="deleteElement(selectedValue)">
              Delete
            </v-list-item-title>
          </v-list-item>
          <v-list-item v-if="selectedValue" link>
            <v-list-item-title @click="copyElement(selectedValue)">
              Copy
            </v-list-item-title>
          </v-list-item>
          <v-list-item v-if="tmpObject" link>
            <v-list-item-title @click="pasteElement"> Paste </v-list-item-title>
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
  import { Robot, Task, Keyword } from '../../types/Task';
   
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
    public executeResultText: any = '';
    tmpObject: any = null;
   
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
      }
    }
   
    @Watch('isOpenMenu', { immediate: true, deep: true })
    menu(value: boolean) {
      if (!value) {
        this.selectedValue = null;
      }
    }
   
    mounted() {
      console.log(this.$route.params);
      const direactoryPath = `./tasks`;
      const text = `${direactoryPath}/${this.$route.params.taskName}.json`;
      let me = this
      fs.exists(text, (exists) => {
        fs.readFile(text, (err, data) => {
          if (err) console.error(err);
          console.log(data.toString());
          let loadData = JSON.parse(data.toString());
          console.log(loadData)
          const tmpRobot = new Robot(loadData.id, loadData.name, loadData.type, loadData.child)
          me.robot = tmpRobot
          // Object.keys(loadData).forEach(function (key) {
          //     new Robot()
          //     // console.log(Object.keys(me.robot))
          // })
        });
        
      });
    }
   
    // Methods
    saveModel() {
      const direactoryPath = `./tasks`;
      const text = `${direactoryPath}/${this.taskName}.json`;
      !fs.existsSync(direactoryPath) && fs.mkdirSync(direactoryPath);
      fs.writeFileSync(text, JSON.stringify(this.robot));
    }
   
    addElement(value: any, type: string, settings: any): any {
      if (value.length > 0) {
        if (type == 'taskName') {
          this.taskName = value;
        } else {
          var controlList = this.$refs.elementList.controlList;
          var keywordList = this.$refs.elementList.keywordList;
   
          controlList.forEach((ctrl: any) => {
            if (value.includes(ctrl.name.toUpperCase())) {
            }
          });
   
          keywordList.forEach((item: any) => {
            item.list.forEach((keyword: string) => {
              if (value.includes(keyword)) {
                var keyInfo = {
                  name: keyword,
                  type: 'Keyowrd',
                };
                var element = this.$refs.elementList.cloneElement(keyInfo);
                this.robot.child.push(element);
              }
            });
          });
        }
      }
    }
   
    deleteElement(value: any) {
      var newChild = this.robot.delChild(value, this.robot.child);
      this.robot.child = newChild;
   
      if (value.type == 'DefinitionKeyword') {
        this.robot.delKeyword(value);
      }
    }
   
    getRecordResult(result: any) {
      var keywordList = this.$refs.elementList.keywordList;
   
      result.forEach((str: string) => {
        if (str) {
          if (str.includes('Click') || str.includes('Control Window')) {
            keywordList.forEach((item: any) => {
              item.list.forEach((keyword: string) => {
                if (str.includes(keyword)) {
                  const element = new Keyword(
                    this.$refs.elementList.idGlobal++,
                    keyword,
                    'Keyword'
                  );
                  element.library = item.library;
                  const locator = this.setLocator(
                    str.replace(keyword, '').trim()
                  );
                  element.property = { locator: locator };
                  this.robot.child.push(element);
                }
              });
            });
          }
        }
      });
    }
   
    setLocator(str: string): any {
      var obj: any = {
        id: '',
        class: '',
        ref: str,
      };
   
      if (str.includes('id:')) {
        var idArr: any = str.split('id:');
        var idVal: any = idArr.pop();
        if (idVal?.includes(' and ')) {
          idArr = idVal?.split(' and ');
          obj.id = idArr.shift();
        } else {
          obj.id = idArr.pop();
        }
      }
   
      if (str.includes('class:')) {
        var classArr: any = str.split('class:');
        var classVal: any = classArr.pop();
        if (classVal?.includes(' and ')) {
          classArr = classVal?.split(' and ');
          obj.class = classArr.shift();
        } else {
          obj.class = classArr.pop();
        }
      }
   
      return obj;
    }
    showOverlay(value: boolean) {
      this.isOverlay = value;
    }
   
    getExecuteResult(result: any) {
      if (result && result != undefined && result != null) {
        this.executeResultText += result.replace('undefined', '');
      }
    }
    endExecution() {
      this.isExecuting = false;
    }
    openExecutePanel() {
      this.executeResultText = '';
      this.isExecuting = true;
      this.isOpenExecute = true;
    }
    closeExecutePanel() {
      this.isOpenExecute = false;
    }
   
    getComponentName(task: any): string {
      if (task.type == 'DefinitionKeyword') {
        return 'keyword-element';
      } else if (task.type == 'Keyword') {
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
   
    updateKeywords(keywords: any) {
      this.robot.setProperty({ keywords: keywords });
    }
   
    openScriptPanel() {
      this.isOpenScript = true;
    }
    closeScriptPanel() {
      this.isOpenScript = false;
    }
   
    openVariableDialog() {
      this.variableDialog = true;
    }
    closeVariableDialog() {
      this.variableDialog = false;
    }
    updateVariables(variables: any) {
      this.robot.setProperty({ variables: variables });
    }
   
    openContextMenu(evt: any, value: any) {
      this.isOpenPanel = false;
      evt.preventDefault();
      evt.cancelBubble = true;
      if (evt.stopPropagation) {
        evt.stopPropagation();
      }
      if (value) {
        this.selectedValue = value;
      }
   
      this.$nextTick(() => {
        this.menuStyle.x = evt.pageX;
        this.menuStyle.y = evt.pageY;
   
        this.isOpenMenu = true;
      });
    }
   
    openPanel(evt: any, value: any) {
      evt.cancelBubble = true;
      if (evt.stopPropagation) {
        evt.stopPropagation();
      }
      this.isOpenPanel = true;
      this.selectedValue = value;
    }
    closePanel() {
      if (this.isOpenPanel) {
        this.isOpenPanel = false;
        this.selectedValue = null;
      }
    }
   
    copyElement(value: any) {
      this.isOpenMenu = false;
      this.tmpObject = JSON.parse(JSON.stringify(value));
      delete this.tmpObject.id;
    }
    pasteElement() {
      try {
        this.isOpenMenu = false;
   
        var newEl = this.$refs.elementList.cloneElement(this.tmpObject);
        if (newEl.library) {
          newEl.library = newEl.library;
        }
        newEl.property = this.tmpObject.property;
        newEl.child = this.cloneChild(this.tmpObject.child);
   
        this.robot.child.push(newEl);
      } catch (e) {
        console.error(e);
      }
    }
   
    cloneChild(child: any): any {
      var newChild: any[] = [];
   
      if (child.length > 0) {
        child.forEach((childEl: any) => {
          var clone = this.$refs.elementList.cloneElement(childEl);
          clone.property = childEl.property;
   
          if (this.cloneChild(childEl.child).length > 0) {
            clone.child = this.cloneChild(childEl.child);
          }
          newChild.push(clone);
        });
      }
      return newChild;
    }
  }
  </script>
   
  <style scoped>
  .container {
    text-align: center;
    max-width: 900px;
  }
   
  .dragArea {
    list-style: none;
    min-height: 500px;
    padding: 0px;
    cursor: pointer;
  }
   
  .task-element {
    /* margin: 28px auto; */
    min-height: 30px;
    list-style: none;
    outline: 1px solid;
  }
  </style>