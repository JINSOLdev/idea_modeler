<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>

                    <variables-field 
                        :label="'Code'"
                        :hint="'Javascript code to execute'"
                        :value.sync="value.property.code"
                    ></variables-field>   
            </v-card-text>

        </v-card>
        <return-values-field
                :value.sync="value.property.returnVal"
        ></return-values-field>
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
    export default class ExecuteJavascriptPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Executes the given JavaScript code with possible arguments "
            this.$emit("setDescription", description)
        }
    }
</script>