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
    export default class GetValuesFromJSONPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Get all values from a JSON serializable object that match the given expression."
            this.$emit("setDescription", description)
        }

    }
</script>