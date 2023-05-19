<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Date'"
                        :hint="'Date to add time to'"
                        :value.sync="value.property.date"
                ></variables-field>

                <variables-field
                        :label="'Time'"
                        :hint="'Time to add'"
                        :value.sync="value.property.time"
                ></variables-field>

                <variables-field
                        :label="'Result Format'"
                        :hint="'Format of returned date'"
                        :value.sync="value.property.resultFormat"
                ></variables-field>

                <v-switch
                        v-model="value.property.excludeMillis"
                        label="Exclude Millis"
                        hint="Round and hide milliseconds"
                        persistent-hint
                        class="py-0 mb-6"
                ></v-switch>

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
    export default class AddTimeToDatePanel extends Mixins(KeywordPanel) {
    }
</script>