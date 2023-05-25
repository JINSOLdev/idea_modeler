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

                <Variables-field
                        :label="'Expected'"
                        :hint="'Expected value'"
                        :value.sync="value.property.expected"
                ></Variables-field>

                <v-switch
                        v-model="value.property.ignore"
                        label="Ignore"
                        hint="Do case-insensitive comparison"
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
    export default class DoesElementContainPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Does element contain expected text"
            this.$emit("setDescription", description)
        }
    }
</script>