<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field 
                        :label="'Worksheet'"
                        :hint="'worksheet to handle'"
                        :value.sync="value.property.worksheet"
                        :required="true"
                ></variables-field> 
            </v-card-text>

            <v-card-text>
                <variables-field 
                        :label="'Row'"
                        :hint="'target row'"
                        :value.sync="value.property.row"
                        :required="true"
                ></variables-field> 
            </v-card-text>

            <v-card-text>
                <variables-field 
                        :label="'Column'"
                        :hint="'target column'"
                        :value.sync="value.property.column"
                        :required="true"
                ></variables-field> 
            </v-card-text>

            <v-card-text>
                <variables-field 
                        :label="'Value'"
                        :hint="'Value to set'"
                        :value.sync="value.property.value"
                        :required="true"
                ></variables-field> 
            </v-card-text>

            <v-card-text>
                <variables-field 
                        :label="'Number Format'"
                        :hint="'possible number format to set with excel number format, write as number_format= (e. g. number_format=0, #,##0,00, 0%, etc)'"
                        :value.sync="value.property.number_format"
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
    export default class WriteToCellsPanel extends Mixins(KeywordPanel) {
        mounted(){
            var description = "Write value, number_format and/or formula into cell."
            this.$emit("setDescription", description)
        }
    }
</script>