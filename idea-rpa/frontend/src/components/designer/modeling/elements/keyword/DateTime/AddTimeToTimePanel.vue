<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Time1'"
                        :hint="'First time'"
                        :value.sync="value.property.time1"
                ></variables-field>

                <variables-field
                        :label="'Time2'"
                        :hint="'Second time'"
                        :value.sync="value.property.time2"
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
            var description = "Adds time to another time and returns the resulting time."
            this.$emit("setDescription", description)
        }
    }
</script>