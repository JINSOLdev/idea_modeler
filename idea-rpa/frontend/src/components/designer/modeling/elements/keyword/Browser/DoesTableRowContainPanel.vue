<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
<!--locator-->
                    <locator-field 
                        :label="'Locator'"
                        :hint="'Locator for element'"
                        :value.sync="value.property.locator"
                        :required="true"
                    ></locator-field>  

                    <variables-field
                        :label="'Row'"
                        :hint="'Table row index'"
                        :value.sync="value.property.row"
                        :required="true"
                    ></variables-field>
                    
                    <variables-field
                        :label="'Expected'"
                        :hint="'Expected value'"
                        :value.sync="value.property.expected"
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
    export default class DoesTableRowContainPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Does table row contain expected text"
            this.$emit("setDescription", description)
        }
    }
</script>