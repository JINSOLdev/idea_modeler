<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Date'"
                        :hint="'Date to subtract from'"
                        :value.sync="value.property.date"
                ></variables-field>

                <variables-field
                        :label="'Time'"
                        :hint="'Time that is being subtracted'"
                        :value.sync="value.property.time"
                ></variables-field>

                <variables-field
                        :label="'Result Format'"
                        :hint="'Format of returned date'"
                        :value.sync="value.property.resultFormat"
                ></variables-field>

                <switch-field
                        :label="'Exclude Millis'"
                        :hint="'Round and hide milliseconds'"
                        :value.sync="value.property.excludeMillis"
                ></switch-field>

                <variables-field
                        :label="'Date Format'"
                        :hint="'Custom timestamp format'"
                        :value.sync="value.property.dateFormat"
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
    export default class SubtractTimeFromDatePanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Subtracts time from date and returns the resulting date."
            this.$emit("setDescription", description)
        }
    }
</script>