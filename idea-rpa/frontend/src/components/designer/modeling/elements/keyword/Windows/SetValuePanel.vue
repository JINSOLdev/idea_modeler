<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <locator-field
                        :label="'Locator'"
                        :hint="'Locator for element'"
                        :value.sync="value.property.locator"
                ></locator-field>

                <variables-field 
                        :label="'Value'"
                        :hint="'Value to set'"
                        :value.sync="value.property.value"
                ></variables-field> 

                    <switch-field
                        :label="'Append'"
                        :hint="'Append value instead of overriding'"
                        :value.sync="value.property.append"
                ></switch-field>

                    <switch-field
                            :label="'Enter'"
                            :hint="'Send Enter key after setting the value'"
                            :value.sync="value.property.enter"
                ></switch-field>

                    <switch-field
                            :label="'Newline'"
                            :hint="'Add newline to the end of the value'"
                            :value.sync="value.property.newline"
                ></switch-field>
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
    export default class SetValuePanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Set value of the element defined by the locator."
            this.$emit("setDescription", description)
        }
    }
</script>