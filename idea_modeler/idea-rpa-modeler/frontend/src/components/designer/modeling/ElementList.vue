<template>
    <div>
        <v-navigation-drawer
                absolute
                permanent
        >
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="text-h6">Keywords</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>
            
            <v-list dense>
                <draggable
                        :list="userKeywords"
                        :group="{ name: 'task', pull: 'clone', put: false }"
                        :clone="cloneElement"
                >
                    <v-list-item link>
                        <v-list-item-title>
                            User Keywords
                        </v-list-item-title>
                    </v-list-item>
                </draggable>

                <v-list-group no-action>
                    <template v-slot:activator>
                        <v-list-item-title>Control</v-list-item-title>
                    </template>
                    <draggable
                            :list="controlList"
                            :group="{ name: 'task', pull: 'clone', put: false }"
                            :clone="cloneElement"
                    >
                        <v-list-item
                                v-for="item in controlList"
                                :key="item.name"
                                link
                        >
                            <v-list-item-content>
                                <v-list-item-title>{{ item.name }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </draggable>
                </v-list-group>

                <v-list-group no-action>
                    <template v-slot:activator>
                        <v-list-item-title>Keywords</v-list-item-title>
                    </template>

                    <v-list-group
                            v-for="keyword in keywords"
                            :key="keyword.name"
                            no-action
                            sub-group
                    >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{ keyword.name }}</v-list-item-title>
                            </v-list-item-content>
                        </template>

                        <draggable
                                :list="keyword.list"
                                :group="{ name: 'task', pull: 'clone', put: false }"
                                :clone="cloneElement"
                        >
                            <v-list-item
                                    v-for="item in keyword.list"
                                    :key="item.name"
                                    link
                            >
                                <v-list-item-title>
                                    {{ item.name }}
                                </v-list-item-title>
                            </v-list-item>
                        </draggable>
                    </v-list-group>
                </v-list-group>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script lang="ts">
    import Draggable from "vuedraggable";
    import { Vue, Component } from "vue-property-decorator"
    import {
        Task,
        IfTask,
        ForTask,
        WhileTask,
        BreakTask,
        ContinueTask,
        ReturnTask,
        TryExceptTask,
        Keyword
    } from "@/types/Task";

    @Component({
        components: {
            Draggable,
        }
    })
    
    export default class ElementList extends Vue {

        mounted() {
            const builtInList = {
                keywordType: 'Built-In',
                list: Vue.prototype.$builtInList
            }
            this.keywordList.push(builtInList)

            const collectionList = {
                keywordType: 'Collections',
                list: Vue.prototype.$collectionList
            }
            this.keywordList.push(collectionList)

            const stringList = {
                keywordType: 'String',
                list: Vue.prototype.$stringList
            }
            this.keywordList.push(stringList)

            const dateTimeList = {
                keywordType: 'DateTime',
                list: Vue.prototype.$dateTimeList
            }
            this.keywordList.push(dateTimeList)

            const jsonList = {
                keywordType: 'JSON',
                list: Vue.prototype.$jsonList
            }
            this.keywordList.push(jsonList)

            const fileSystemList = {
                keywordType: 'File System',
                list: Vue.prototype.$fileSystemList
            }
            this.keywordList.push(fileSystemList)

            const browserList = {
                keywordType: 'Browser',
                list: Vue.prototype.$browserList
            }
            this.keywordList.push(browserList)

            const httpList = {
                keywordType: 'HTTP',
                list: Vue.prototype.$httpList
            }
            this.keywordList.push(httpList)

            // const excelList = {
            //     keywordType: 'Excel (Applications)',
            //     list: Vue.prototype.$excelList
            // }
            // this.keywordList.push(excelList)

            const excelList = {
                keywordType: 'Excel (Files)',
                list: Vue.prototype.$excelList
            }
            this.keywordList.push(excelList)

            const tablesList = {
                keywordType: 'Tables',
                list: Vue.prototype.$tablesList
            }
            this.keywordList.push(tablesList)
            
            const windowsList = {
                keywordType: 'Windows',
                list: Vue.prototype.$windowsList
            }
            this.keywordList.push(windowsList)

            const control = Vue.prototype.$controlList
            control.forEach((ctrl: string) => {
                if(!ctrl.includes('Relation')) {
                    if(ctrl.includes('Try')) {
                        this.controlList.push({
                            name: 'Try-Except',
                            type: 'TryExceptTask'
                        })
                    } else {
                        this.controlList.push({
                            name: ctrl.replace(' Task', ''), 
                            type: ctrl.replace(' ', '')
                        })
                    }
                }
            })
        }

        // Data
        idGlobal: number = 50
        elementTypes: any[] = [
            {name: "ForTask", type: ForTask},
            {name: "IfTask", type: IfTask},
            {name: "WhileTask", type: WhileTask},
            {name: "BreakTask", type: BreakTask},
            {name: "ContinueTask", type: ContinueTask},
            {name: "ReturnTask", type: ReturnTask},
            {name: "TryExceptTask", type: TryExceptTask},
            {name: "Keyword", type: Keyword},
        ]
        controlList: any[] = []
        keywordList: any[] = []
        userKeywords: any[] = [
            {
                name: "New User Keyword", 
                type: "DefinitionKeyword"
            }
        ]

        // Computed
        get keywords() {
            var list: any[] = []
            this.keywordList.forEach((type: any) => {
                var keyList: any[] = []
                type.list.forEach((keyword: string) => {
                    keyList.push({
                        name: keyword,
                        type: "Keyword",
                    })
                })
                list.push({
                    name: type.keywordType,
                    list: keyList
                })
            })
            return list
        }

        // Methods
        cloneElement(value: any) {
            let item
            if(value.type == "DefinitionKeyword") {
                item = { type: Keyword }
                const keyword = new (item.type)(this.idGlobal++, value.name, value.type)
                this.updateKeywords(keyword)
                return keyword
            } else {
                item = this.elementTypes.find((obj: any) => obj.name == value.type)
                if (item) {
                    return new (item.type)(this.idGlobal++, value.name, value.type)
                }
            }
        }

        updateKeywords(value: any) {
            this.$emit('updateKeywords', value)
        }

    }
</script>

<style scoped>
    .tools {
        position: absolute !important;
        text-align: center;
        width: 100px;
        left: 20px;
        top: 200px;
        padding: 10px;
        overflow: hidden;
        box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 
                    0 2px 2px 0 rgb(0 0 0 / 14%), 
                    0 1px 5px 0 rgb(0 0 0 / 40%) !important;

    }

    .tool-item {
        cursor: pointer;
        margin-top: 5px;
        margin-bottom: 5px;
    }
    .tool-item > .v-icon {
        font-size: 40px !important;
    }

    .keyword-dialog {
        position: absolute !important;
        left: 125px;
        top: 200px;
        overflow-y: auto;
        min-width: 200px;
        max-width: 500px;
        max-height: 450px;
        box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 
                    0 2px 2px 0 rgb(0 0 0 / 14%), 
                    0 1px 5px 0 rgb(0 0 0 / 40%) !important;
    }

</style>