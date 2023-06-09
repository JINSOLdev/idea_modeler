<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Condition'"
                        :hint="'JavaScript expression that should return a true value'"
                        :value.sync="value.property.condition"
                        :required="true"
                ></variables-field>
            </v-card-text>

            <v-card-text>
                <variables-field
                        :label="'Timeout'"
                        :hint="'Time to wait, e.g. 5 seconds or 1min'"
                        :value.sync="value.property.timeout"
                ></variables-field>
            </v-card-text>

            <v-card-text>
                <variables-field
                        :label="'Error'"
                        :hint="'Custom error message'"
                        :value.sync="value.property.error"
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
    
    export default class WaitForConditionPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Waits until condition is true or timeout expires."
            this.$emit("setDescription", description)
        }
    }
</script>