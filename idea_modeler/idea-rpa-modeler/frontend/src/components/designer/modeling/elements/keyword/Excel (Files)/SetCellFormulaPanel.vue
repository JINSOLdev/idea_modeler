<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Range String'"
                        :hint="'Cell range (e.g. E2:E10)'"
                        :value.sync=value.property.range_string
                        :required="true"
                ></variables-field>

                <variables-field
                        :label="'Formula'"
                        :hint="'Formula to insert into cell(s)'"
                        :value.sync=value.property.formula
                        :required="true"
                ></variables-field>

                <variables-field
                        :label="'Transpose'"
                        :hint="'If the the cell formulas will be transposed'"
                        :value.sync=value.property.transpose
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
    export default class SetCellFormulaPanel extends Mixins(KeywordPanel) {
    }
</script>