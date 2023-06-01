<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <path-field
                        :label="'Path'"
                        :hint="'Path to screenshot. The string {index} will be replaced with an index number to avoid overwriting previous screenshots.'"
                        :value.sync="value.property.path"
                        :required="true"
                ></path-field>
            </v-card-text>

            <v-card-text>
                <Locator-field
                        :label="'Locator'"
                        :hint="'Element to crop screenshot to.'"
                        :value.sync="value.property.locator"
                        :required="true"
                ></Locator-field>
            </v-card-text>

            <v-card-text>
                    <v-switch
                        v-model="value.property.embed"
                        label="Embed"
                        hint="Embed screenshot into system log"
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
    export default class TakeScreenshotPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Take a screenshot of the whole screen, or an element identified by the given locator."
            this.$emit("setDescription", description)
        }
    }
</script>