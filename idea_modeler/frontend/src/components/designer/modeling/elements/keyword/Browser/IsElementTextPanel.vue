<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>
            <v-card-text>                      
<!--locator-->
                    <variables-field 
                        :label="'Locator'"
                        :hint="'Locator for element'"
                        :value.sync="value.property.locator"
                    ></variables-field>

                    <variables-field
                        :label="'Expected'"
                        :hint="'Expected value'"
                        :value.sync="value.property.expected"
                    ></variables-field>

                    <v-switch
                        v-model="value.property.secure"
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
    }
</script>