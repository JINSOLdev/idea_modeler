<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Start Cell'"
                        :hint="'Cell range or single cell (e.g. E2:E10 or G2)'"
                        :value.sync="value.property.start_cell"
                        :required="true"
                ></variables-field>

                <variables-field
                        :label="'Values'"
                        :hint="'List of lists or a table'"
                        :value.sync="value.property.values"
                        :required="true"
                ></variables-field>

                 <Variables-field
                        :label="'Table Heading'"
                        :hint="'If values are given as a table, this parameter defines if Table headings should be inserted as a row'"
                        :value.sync="value.property.table_heading"
                ></Variables-field>
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
    export default class SetCellValuesPanel extends Mixins(KeywordPanel) {
    }
</script>