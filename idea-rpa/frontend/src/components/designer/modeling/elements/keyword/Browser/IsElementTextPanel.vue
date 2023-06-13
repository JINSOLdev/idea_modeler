<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <locator-field 
                        :hint="'Locator for element'"
                        :value.sync="value.property.locator"
                ></locator-field>

                <variables-field
                        :label="'Expected'"
                        :hint="'Expected value'"
                        :value.sync="value.property.expected"
                        :required="true"
                ></variables-field>

                <switch-field
                        :label="'Ignore Case'"
                        :hint="'Do case-insensitive comparison'"
                        :value.sync="value.property.ignore_case"
                ></switch-field>
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