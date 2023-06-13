<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                            :label="'Doc'"
                            :hint="'JSON-compatible object'"
                            :value.sync="value.property.doc"
                            :required="true"
                    ></variables-field>


                    <variables-field
                            :label="'Expr'"
                            :hint="'JSONPath expression'"
                            :value.sync="value.property.expr"
                            :required="true"
                    ></variables-field>

                    <variables-field
                            :label="'Value'"
                            :hint="'New value for matching item(s)'"
                            :value.sync="value.property.value"
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
    export default class UpdateValueToJSONPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Update existing values in a JSON serializable object and return the result. Will change all values that match the expression."
            this.$emit("setDescription", description)
        }

    }
</script>