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
    export default class ReadFromCellsPanel extends Mixins(KeywordPanel) {
        mounted(){
            var description = "Read value from cell."
            this.$emit("setDescription", description)
        }
    }
</script>