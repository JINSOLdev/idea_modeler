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
                        :label="'Expected'"
                        :hint="'Expected value'"
                        :value.sync="value.property.expected"
                        :required="true"
                    ></variables-field>

                    <v-switch
                        v-model="value.property.ignore_case"
                        label="Ignore Case"
                        hint="Do case-insensitive comparison"
                        persistent-hint
                        class="py-0 mb-6"
                    ></v-switch>

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
    export default class IsElementTextPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Is element text expected"
            this.$emit("setDescription", description)
        }
    }
</script>