<template>
    <v-navigation-drawer
            absolute
            permanent
            right
            style="width: 600px;"
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
                
                <pre class="scirpt-text">{{ scriptText }}</pre>
            </v-card-text>
        </v-card>
    </v-navigation-drawer>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from "vue-property-decorator"

    @Component
    export default class RobotScriptPanel extends Vue {
        @Prop() public robot!: any;

        public scriptText: string = ''
        alert: boolean = false

        get scriptTextLines() {
            return this.scriptText.split("\n");
        }

        mounted () {
            this.scriptText = this.robot.toRobot(0)
            console.log(this.scriptText)
        }

        copyScriptText() {
            window.navigator.clipboard.writeText(this.scriptText)
            this.alert = true
            setTimeout(() => {
                this.alert = false
            }, 1000)
        }
    }
</script>

<style scoped>
    .scirpt-text {
        font-family: Roboto,sans-serif;
    }
</style>