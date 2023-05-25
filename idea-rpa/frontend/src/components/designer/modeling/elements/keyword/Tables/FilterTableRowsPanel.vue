<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Table'"
                        :hint="'Table to search'"
                        :value.sync="value.property.table"
                ></variables-field>
                <variables-field
                        :label="'Column'"
                        :hint="'Column to compare with'"
                        :value.sync="value.property.column"
                ></variables-field>
                <variables-field
                        :label="'Operator'"
                        :hint="'Comparison operator'"
                        :value.sync="value.property.operator"
                ></variables-field>
                <variables-field
                        :label="'Value'"
                        :hint="'Value to compare column to'"
                        :value.sync="value.property.value"
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
    export default class FilterTableRowsPanel extends Mixins(KeywordPanel) {
    }
</script>