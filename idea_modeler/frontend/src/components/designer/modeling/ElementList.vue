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
<<<<<<< HEAD

            <v-list dense>
                <v-list-item>
                    <v-text-field
                            v-model="searchKeyword"
                            placeholder="Search Keyword"
                            outlined
                            dense
                            hide-details="false"
                            class="mb-1"
                    ></v-text-field>
                </v-list-item>
                <div v-if="filteredKeywords.length > 0">
                    <v-list-group
                            v-for="(keyword, idx) in filteredKeywords"
                            :key="keyword.name+idx"
=======
            
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
>>>>>>> 0519
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
<<<<<<< HEAD
                                    v-for="(item, idx) in keyword.list"
                                    :key="item.name+idx"
=======
                                    v-for="item in keyword.list"
                                    :key="item.name"
>>>>>>> 0519
                                    link
                            >
                                <v-list-item-title>
                                    {{ item.name }}
                                </v-list-item-title>
                            </v-list-item>
                        </draggable>
                    </v-list-group>
<<<<<<< HEAD
                </div>

                <div v-else>
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
                </div>
=======
                </v-list-group>
>>>>>>> 0519
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script lang="ts">
    import Draggable from "vuedraggable";
<<<<<<< HEAD
    import { Vue, Component, Watch } from "vue-property-decorator"
=======
    import { Vue, Component } from "vue-property-decorator"
>>>>>>> 0519
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
<<<<<<< HEAD
                library: '',
=======
>>>>>>> 0519
                list: Vue.prototype.$builtInList
            }
            this.keywordList.push(builtInList)

            const collectionList = {
                keywordType: 'Collections',
<<<<<<< HEAD
                library: 'Collections',
=======
>>>>>>> 0519
                list: Vue.prototype.$collectionList
            }
            this.keywordList.push(collectionList)

            const stringList = {
                keywordType: 'String',
<<<<<<< HEAD
                library: 'String',
=======
>>>>>>> 0519
                list: Vue.prototype.$stringList
            }
            this.keywordList.push(stringList)

            const dateTimeList = {
                keywordType: 'DateTime',
<<<<<<< HEAD
                library: 'DateTime',
=======
>>>>>>> 0519
                list: Vue.prototype.$dateTimeList
            }
            this.keywordList.push(dateTimeList)

            const jsonList = {
                keywordType: 'JSON',
<<<<<<< HEAD
                library: 'RPA.JSON',
=======
>>>>>>> 0519
                list: Vue.prototype.$jsonList
            }
            this.keywordList.push(jsonList)

            const fileSystemList = {
                keywordType: 'File System',
<<<<<<< HEAD
                library: 'RPA.FileSystem',
=======
>>>>>>> 0519
                list: Vue.prototype.$fileSystemList
            }
            this.keywordList.push(fileSystemList)

            const browserList = {
                keywordType: 'Browser',
<<<<<<< HEAD
                library: 'RPA.Browser.Selenium',
=======
>>>>>>> 0519
                list: Vue.prototype.$browserList
            }
            this.keywordList.push(browserList)

            const httpList = {
                keywordType: 'HTTP',
<<<<<<< HEAD
                library: 'RPA.HTTP',
=======
>>>>>>> 0519
                list: Vue.prototype.$httpList
            }
            this.keywordList.push(httpList)

<<<<<<< HEAD
            const excelList = {
                keywordType: 'Excel (Files)',
                library: 'RPA.Excel.Files',
=======
            // const excelList = {
            //     keywordType: 'Excel (Applications)',
            //     list: Vue.prototype.$excelList
            // }
            // this.keywordList.push(excelList)

            const excelList = {
                keywordType: 'Excel (Files)',
>>>>>>> 0519
                list: Vue.prototype.$excelList
            }
            this.keywordList.push(excelList)

            const tablesList = {
                keywordType: 'Tables',
<<<<<<< HEAD
                library: 'RPA.Tables',
=======
>>>>>>> 0519
                list: Vue.prototype.$tablesList
            }
            this.keywordList.push(tablesList)
            
            const windowsList = {
                keywordType: 'Windows',
<<<<<<< HEAD
                library: 'RPA.Windows',
=======
>>>>>>> 0519
                list: Vue.prototype.$windowsList
            }
            this.keywordList.push(windowsList)

<<<<<<< HEAD
            const workItemsList = {
                keywordType: 'Work Items (Control Room)',
                library: 'RPA.Robocorp.WorkItems',
                list: Vue.prototype.$workItemsList
            }
            this.keywordList.push(workItemsList)

            const vaultList = {
                keywordType: 'Vault (Control Room)',
                library: 'RPA.Robocorp.Vault',
                list: Vue.prototype.$vaultList
            }
            this.keywordList.push(vaultList)

            const archiveList = {
                keywordType: 'Archive',
                library: 'RPA.Archive',
                list: Vue.prototype.$archiveList
            }
            this.keywordList.push(archiveList)

            const emailExchangeList = {
                keywordType: 'Email (Exchange)',
                library: 'RPA.Email.Exchange',
                list: Vue.prototype.$emailExchangeList
            }
            this.keywordList.push(emailExchangeList)

            const emailImapSmtpList = {
                keywordType: 'Email (IMAP/SMTP)',
                library: 'RPA.Email.ImapSmtp',
                list: Vue.prototype.$emailImapSmtpList
            }
            this.keywordList.push(emailImapSmtpList)

            const pdfList = {
                keywordType: 'PDF',
                library: 'RPA.PDF',
                list: Vue.prototype.$pdfList
            }
            this.keywordList.push(pdfList)

=======
>>>>>>> 0519
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
<<<<<<< HEAD
        searchKeyword: string = ""
        filteredKeywords: any[] = []
=======
>>>>>>> 0519

        // Computed
        get keywords() {
            var list: any[] = []
            this.keywordList.forEach((type: any) => {
                var keyList: any[] = []
                type.list.forEach((keyword: string) => {
                    keyList.push({
                        name: keyword,
                        type: "Keyword",
<<<<<<< HEAD
                        library: type.library,
=======
>>>>>>> 0519
                    })
                })
                list.push({
                    name: type.keywordType,
                    list: keyList
                })
            })
            return list
        }

<<<<<<< HEAD
        @Watch("searchKeyword", {immediate: true, deep: true})
        filtered(newVal: string) {
            var list: any[] = []
            if (newVal) {
                this.keywordList.forEach((type: any) => {
                    var keyList: any[] = []
                    type.list.forEach((keyword: string) => {
                        if ((keyword.toLowerCase()).includes(newVal.toLowerCase())) {
                            keyList.push({
                                name: keyword,
                                type: "Keyword",
                                library: type.library,
                            })
                        }
                    })
                    if (keyList.length > 0) {
                        list.push({
                            name: type.keywordType,
                            list: keyList
                        })
                    }
                })
            }
            this.filteredKeywords = list
        }

=======
>>>>>>> 0519
        // Methods
        cloneElement(value: any) {
            let item
            if(value.type == "DefinitionKeyword") {
                item = { type: Keyword }
                const keyword = new (item.type)(this.idGlobal++, value.name, value.type)
<<<<<<< HEAD
                keyword.library = "User Keyword"
=======
>>>>>>> 0519
                this.updateKeywords(keyword)
                return keyword
            } else {
                item = this.elementTypes.find((obj: any) => obj.name == value.type)
                if (item) {
<<<<<<< HEAD
                    var newEl = new (item.type)(this.idGlobal++, value.name, value.type)
                    if (item.name == 'Keyword') {
                        newEl.library = value.library
                    }
                    return newEl
=======
                    return new (item.type)(this.idGlobal++, value.name, value.type)
>>>>>>> 0519
                }
            }
        }

        updateKeywords(value: any) {
            this.$emit('updateKeywords', value)
        }

    }
</script>

<style scoped>
<<<<<<< HEAD
    .v-text-field.v-text-field--enclosed .v-text-field__details {
        height: 0px !important;
        margin: 0;
        padding: 0;
=======
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
>>>>>>> 0519
    }

</style>