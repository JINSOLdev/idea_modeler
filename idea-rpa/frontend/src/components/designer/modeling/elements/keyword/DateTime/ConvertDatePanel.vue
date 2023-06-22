<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Date'"
                        :hint="'Date to convert'"
                        :value.sync="value.property.date"
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
                        :value.sync="value.property.exclude_millis"
                ></switch-field>

                <variables-field
                        :label="'Date Format'"
                        :hint="'Custom timestamp format'"
                        :value.sync="value.property.date_format"
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
    export default class ConvertDatePanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Converts between supported date formats"
            this.$emit("setDescription", description)
        }
    }
</script>