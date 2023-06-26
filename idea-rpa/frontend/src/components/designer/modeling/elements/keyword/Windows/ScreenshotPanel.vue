<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <locator-field
                        :isWindows="true"
                        :label="'Locator'"
                        :hint="'Locator for element or window to screenshot'"
                        :value.sync="value.property.locator"
                        :required="true"
                ></locator-field>

                <path-field
                        :label="'Filename'"
                        :hint="'Path to saved screenshot'"
                        :value.sync="value.property.filename"
                        :required="true"
                ></path-field>
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
    export default class ScreenshotPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Take a screenshot of the element defined by the locator."
            this.$emit("setDescription", description)
        }
    }
</script>