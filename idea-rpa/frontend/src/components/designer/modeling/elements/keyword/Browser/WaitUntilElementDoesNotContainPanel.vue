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
                        :required="true"
                ></locator-field>

                <variables-field
                        :label="'Text'"
                        :hint="'Text to search for'"
                        :value.sync="value.property.text"
                        :required="true"
                ></variables-field>

                <variables-field
                        :label="'Timeout'"
                        :hint="'Time to wait, e.g. 5 seconds or 1 min'"
                        :value.sync="value.property.timeout"
                ></variables-field>

                <variables-field
                        :label="'Error'"
                        :hint="'Custom error message'"
                        :value.sync="value.property.error"
                ></variables-field>
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
    
    export default class WaitUntilElementDoesNotContainPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Waits until the element locator does not contain text."
            this.$emit("setDescription", description)
        }
    }
</script>