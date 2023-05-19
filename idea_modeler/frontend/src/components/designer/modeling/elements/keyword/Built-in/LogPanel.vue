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
                        :value.sync="value.property.message"
                ></variables-field>

                <v-switch
                    v-model="value.property.Html"
                    label="Html"
                    messages="Allow HTML content in message"
                    class="py-0"
                ></v-switch>

                <v-switch
                    v-model="value.property.Console"
                    label="Console"
                    messages="Write message to console in addition to log file"
                    class="py-0"
                ></v-switch>

                <v-switch
                    v-model="value.property.Repr"
                    label="Repr"
                    messages="Format message with `repr` formatter"
                    class="py-0"
                ></v-switch>
            </v-card-text>  
            
            <v-card-text>
                <variables-field
                        :label="'Formatter'"
                        :hint="'Control the string representation of message. Valid options are `str` (default), `repr`, and `ascii`'"
                        :value.sync="value.property.message"
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
    }
</script>