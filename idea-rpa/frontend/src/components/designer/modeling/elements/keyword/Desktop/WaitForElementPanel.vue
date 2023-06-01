<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <Locator-field
                        :label="'Locator'"
                        :hint="'Locator string'"
                        :value.sync="value.property.locator"
                        :required="true"
                ></Locator-field>
            </v-card-text>

            <v-card-text>
                <variables-field 
                        :label="'Timeout'"
                        :hint="'Defines how long to wait for element to appear.'"
                        :value.sync="value.property.timeout"
                ></variables-field> 
            </v-card-text>

            <v-card-text>
                <variables-field 
                        :label="'Interval'"
                        :hint="'How often to poll for element.'"
                        :value.sync="value.property.Interval"
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
    export default class WaitForElementPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Wait for an element defined by locator to exist, or raise a TimeoutException if none were found within timeout."
            this.$emit("setDescription", description)
        }
    }
</script>