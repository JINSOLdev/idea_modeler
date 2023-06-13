<template>
    <!-- 
        TODO: scriptText 를 모델로 전환하는 parse 기능 필요.
    -->
    <v-navigation-drawer
            absolute
            permanent
            right
            style="width: 800px;"
    >
        <v-card outlined>
            <v-card-title class="d-flex">
                <div class="mr-auto">
                    Robot Script
                </div>
                <v-tooltip left>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn icon
                                v-bind="attrs"
                                v-on="on"
                                @click="copyScriptText"
                        >
                            <v-icon>mdi-content-copy</v-icon>
                        </v-btn>
                    </template>
                    <span>Robot Script Text Copy</span>
                </v-tooltip>
            </v-card-title>

            <v-card-text>
                <v-alert dense text
                        type="success"
                        :value="alert"
                >Copy!</v-alert>
                
                <pre>{{ scriptText }}</pre>
                <!-- <v-textarea
                        v-model="scriptText"
                        @keydown.tab.prevent="addTabKey"
                        auto-grow
                ></v-textarea> -->
            </v-card-text>
        </v-card>
    </v-navigation-drawer>
</template>

<script lang="ts">
    import { Vue, Component, Prop, Watch } from "vue-property-decorator"
    import { Robot, Task, Keyword } from "@/types/Task";

    @Component
    export default class RobotScriptPanel extends Vue {
        @Prop() public robot!: any;

        public scriptText: string = ""
        public alert: boolean = false

        get scriptTextLines() {
            return this.scriptText.split("\n");
        }

        mounted () {
            this.scriptText = this.robot.toRobot(0);
        }

        // @Watch("scriptText", {immediate: true, deep: true})
        // updateScriptText(newVal: string) {
        //     if(newVal && newVal.length > 0) {
        //         this.parseRobotText(newVal)
        //     }
        // }

        copyScriptText() {
            window.navigator.clipboard.writeText(this.scriptText)
            this.alert = true
            setTimeout(() => {
                this.alert = false
            }, 1000)
        }

        addTabKey(event: any) {
            var start = event.target.selectionStart;
            var end = event.target.selectionEnd;

            var target = event.target;
            var value = target.value;

            target.value = value.substring(0, start) + "\t" + value.substring(end);
            event.target.selectionStart = event.target.selectionEnd = start + 1;
        }
        
        // parseRobotText(text: string) {
        //     try {
        //         var settings: any
        //         var tasks: any

        //         if (text.includes("*** Settings ***")) {
        //             settings = text.split("*** Settings ***").pop()
        //             settings = settings?.split("*** Variables ***").shift()
        //         }

        //         if (text.includes("*** Variables ***")) {
        //             var variables: any = text.split("*** Variables ***").pop()
        //             variables = variables?.split("*** Tasks ***").shift()
        //         }

        //         if (text.includes("*** Tasks ***")) {
        //             tasks = text.split("*** Tasks ***").pop()

        //             if (text.includes("*** Keywords ***")) {
        //                 tasks = tasks?.split("*** Keywords ***").shift()
        //             }

        //             var taskList = tasks?.split("\n")

        //             taskList?.forEach((str: string) => {
        //                 if(str && str != "") {
        //                     if (str.includes("\t") || str.includes("    ")) {
        //                         this.$emit("addElement", str, "Keyword", settings)

        //                     } else {
        //                        this.$emit("addElement", str, "taskName")
                               
        //                     }
        //                 }
        //             })
        //         }
                
        //         if (text.includes("*** Keywords ***")) {
        //             var definitionKeywords = text.split("*** Keywords ***").pop()
        //             var definitionKeywordList = definitionKeywords?.split("\n")

        //             definitionKeywordList?.forEach((str: string) => {
        //                 if (str.includes("\t") || str.includes("    ")) {
        //                     this.$emit("addElement", str, "Keyword", settings)
                        
        //                 } else {
        //                     this.$emit("addElement", str, "DefinitionKeyword", settings)

        //                 }
        //             })
        //         }

        //     } catch (error) {
        //         console.log(error)
        //     }            
        // }
    }
</script>

<style scoped>
</style>