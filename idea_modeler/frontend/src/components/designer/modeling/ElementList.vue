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
                                    v-for="(item, idx) in keyword.list"
                                    :key="item.name+idx"
                                    link
                            >
                                <v-list-item-title>
                                    {{ item.name }}
                                </v-list-item-title>
                            </v-list-item>
                        </draggable>
                    </v-list-group>
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
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script lang="ts">
    import Draggable from "vuedraggable";
    import { Vue, Component, Watch } from "vue-property-decorator"
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
                library: '',
                list: Vue.prototype.$builtInList
            }
            this.keywordList.push(builtInList)

            const collectionList = {
                keywordType: 'Collections',
                library: 'Collections',
                list: Vue.prototype.$collectionList
            }
            this.keywordList.push(collectionList)

            const stringList = {
                keywordType: 'String',
                library: 'String',
                list: Vue.prototype.$stringList
            }
            this.keywordList.push(stringList)

            const dateTimeList = {
                keywordType: 'DateTime',
                library: 'DateTime',
                list: Vue.prototype.$dateTimeList
            }
            this.keywordList.push(dateTimeList)

            const jsonList = {
                keywordType: 'JSON',
                library: 'RPA.JSON',
                list: Vue.prototype.$jsonList
            }
            this.keywordList.push(jsonList)

            const fileSystemList = {
                keywordType: 'File System',
                library: 'RPA.FileSystem',
                list: Vue.prototype.$fileSystemList
            }
            this.keywordList.push(fileSystemList)

            const browserList = {
                keywordType: 'Browser',
                library: 'RPA.Browser.Selenium',
                list: Vue.prototype.$browserList
            }
            this.keywordList.push(browserList)

            const httpList = {
                keywordType: 'HTTP',
                library: 'RPA.HTTP',
                list: Vue.prototype.$httpList
            }
            this.keywordList.push(httpList)

            const excelList = {
                keywordType: 'Excel (Files)',
                library: 'RPA.Excel.Files',
                list: Vue.prototype.$excelList
            }
            this.keywordList.push(excelList)

            const tablesList = {
                keywordType: 'Tables',
                library: 'RPA.Tables',
                list: Vue.prototype.$tablesList
            }
            this.keywordList.push(tablesList)
            
            const windowsList = {
                keywordType: 'Windows',
                library: 'RPA.Windows',
                list: Vue.prototype.$windowsList
            }
            this.keywordList.push(windowsList)

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
        searchKeyword: string = ""
        filteredKeywords: any[] = []

        // Computed
        get keywords() {
            var list: any[] = []
            this.keywordList.forEach((type: any) => {
                var keyList: any[] = []
                type.list.forEach((keyword: string) => {
                    keyList.push({
                        name: keyword,
                        type: "Keyword",
                        library: type.library,
                    })
                })
                list.push({
                    name: type.keywordType,
                    list: keyList
                })
            })
            return list
        }

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

        // Methods
        cloneElement(value: any) {
            let item
            if(value.type == "DefinitionKeyword") {
                item = { type: Keyword }
                const keyword = new (item.type)(this.idGlobal++, value.name, value.type)
                keyword.library = "User Keyword"
                this.updateKeywords(keyword)
                return keyword
            } else {
                item = this.elementTypes.find((obj: any) => obj.name == value.type)
                if (item) {
                    var newEl = new (item.type)(this.idGlobal++, value.name, value.type)
                    if (item.name == 'Keyword') {
                        newEl.library = value.library
                    }
                    return newEl
                }
            }
        }

        updateKeywords(value: any) {
            this.$emit('updateKeywords', value)
        }

    }
</script>

<style scoped>
    .v-text-field.v-text-field--enclosed .v-text-field__details {
        height: 0px !important;
        margin: 0;
        padding: 0;
    }

</style>