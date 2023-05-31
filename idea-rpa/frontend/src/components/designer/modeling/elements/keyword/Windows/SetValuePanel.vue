<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <Locator-field
                        :label="'Locator'"
                        :hint="'Locator for element'"
                        :value.sync="value.property.locator"
                ></Locator-field>
            </v-card-text>

            <v-card-text>
                <variables-field 
                        :label="'Value'"
                        :hint="'Value to set'"
                        :value.sync="value.property.value"
                ></variables-field> 
            </v-card-text>

            <v-card-text>
                    <v-switch
                        v-model="value.property.append"
                        label="Append"
                        hint="Append value instead of overriding"
                        persistent-hint
                        class="py-0 mb-6"
                ></v-switch>
            </v-card-text>

            <v-card-text>
                    <v-switch
                        v-model="value.property.enter"
                        label="Enter"
                        hint="Send Enter key after setting the value"
                        persistent-hint
                        class="py-0 mb-6"
                ></v-switch>
            </v-card-text>

            <v-card-text>
                    <v-switch
                        v-model="value.property.newline"
                        label="Newline"
                        hint="Add newline to the end of the value"
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
    export default class SetValuePanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Set value of the element defined by the locator."
            this.$emit("setDescription", description)
        }
    }
</script>