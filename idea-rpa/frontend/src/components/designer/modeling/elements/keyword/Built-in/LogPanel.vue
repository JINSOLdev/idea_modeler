<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>
            
            <v-card-text>
                <variables-field
                        :label="'Message'"
                        :hint="'The message to log'"
                        :value.sync="value.property.message"
                ></variables-field>

                <variables-field
                        :label="'Level'"
                        :hint="'Log level of message. Valid options are `TRACE`, `DEBUG`, `INFO` (default), `HTML`, `WARN`, and `ERROR`.'"
                        :value.sync="value.property.level"
                ></variables-field>

                <switch-field
                        :label="'HTML'"
                        :hint="'Allow HTML content in message'"
                        :value.sync="value.property.html"
                ></switch-field>

                <switch-field
                        :label="'Console'"
                        :hint="'Write message to console in addition to log file'"
                        :value.sync="value.property.console"
                ></switch-field>

                <switch-field
                        :label="'Repr'"
                        :hint="'Format message with `repr` formatter'"
                        :value.sync="value.property.repr"
                ></switch-field>
                
                <variables-field
                        :label="'Formatter'"
                        :hint="'Control the string representation of message. Valid options are `str` (default), `repr`, and `ascii`'"
                        :value.sync="value.property.formatter"
                ></variables-field>
            </v-card-text>
        </v-card>
     
    </div>
</template>

<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordPanel from '../../panels/KeywordPanel.vue'

    @Component({
        components: {
            KeywordPanel,
        }
    })
    export default class LogPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Logs the given message with the given level."
            this.$emit("setDescription", description)
        }
    }
</script>