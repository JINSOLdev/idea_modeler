<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Date1'"
                        :hint="'Date to subtract from'"
                        :value.sync="value.property.date1"
                        :required="true"
                ></variables-field>

                <variables-field
                        :label="'Date2'"
                        :hint="'Date that is subtracted'"
                        :value.sync="value.property.date2"
                        :required="true"
                ></variables-field>

                <variables-field
                        :label="'Result Format'"
                        :hint="'Format of returned date'"
                        :value.sync="value.property.result_format"
                ></variables-field>

                <switch-field
                        :label="'Exclude Millis'"
                        :hint="'Round and hide milliseconds'"
                        :value.sync="value.property.exclude_mills"
                ></switch-field>

                <variables-field
                        :label="'Date1 Format'"
                        :hint="'Custom timestamp format for `date1`'"
                        :value.sync="value.property.date1_format"
                ></variables-field>

                <variables-field
                        :label="'Date2 Format'"
                        :hint="'Custom timestamp format for `date2`'"
                        :value.sync="value.property.date2_format"
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
    export default class SubtractDateFromDatePanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Subtracts date from another date and returns time between."
            this.$emit("setDescription", description)
        }
    }
</script>