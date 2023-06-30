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
                        :label="'Expected'"
                        :hint="'Expected value'"
                        :value.sync="value.property.expected"
                ></variables-field>

                <switch-field
                        :label="'Ignore'"
                        :hint="'Do case-insensitive comparison'"
                        :value.sync="value.property.ignore_case"
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
    export default class DoesElementContainPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Does element contain expected text"
            this.$emit("setDescription", description)
        }
    }
</script>