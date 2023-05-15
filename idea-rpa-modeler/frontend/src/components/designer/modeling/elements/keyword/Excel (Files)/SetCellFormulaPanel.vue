<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Range String'"
                        :hint="'Cell range (e.g. E2:E10)"
                        :value.sync="value.property.range_string"
                ></variables-field>

                <variables-field
                        :label="'Formula'"
                        :hint="'Formula to insert into cell(s)"
                        :value.sync="value.property.formula"
                ></variables-field>

                <v-switch
                        v-model="value.property.transpose"
                        label="Transpose"
                        hint="If the cell formulas will be transposed"
                        persistent-hint
                        class="py-0 mb-6"
                ></v-switch>
                
                


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
    export default class SetCellFormulaPanel extends Mixins(KeywordPanel) {
    }
</script>