<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
               
                <variables-field
                        :label="'Worksheet'"
                        :hint="'Worksheet to handle, defaults to active worksheet if None'"
                        :value.sync="value.property.worksheet"
                ></variables-field>
                
                <variables-field
                        :label="'Row'"
                        :hint="'Target row, defaults to none'"
                        :value.sync="value.property.row"
                ></variables-field>
                <variables-field
                        :label="'Column'"
                        :hint="'Target column, defaults to none'"
                        :value.sync="value.property.column"
                ></variables-field>
                <variables-field
                        :label="'Value'"
                        :hint="'Possible value to set, defaults to None'"
                        :value.sync="value.property.value"
                ></variables-field>

                <variables-field
                        :label="'Number format'"
                        :hint="'Possible number format to set, defaults to None'"
                        :value.sync="value.property.number_format"
                ></variables-field>

                <variables-field
                        :label="'Formula'"
                        :hint="'Possible format to set, defaults to None'"
                        :value.sync="value.property.formula"
                ></variables-field>



                <v-switch
                        v-model="value.property.create_workbook"
                        label="Create workbook"
                        hint="Create workbook if does not exist"
                        persistent-hint
                        class="py-0 mb-6"
                ></v-switch>

             
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
    export default class WriteToCellsPanel extends Mixins(KeywordPanel) {
    }
</script>