<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <locator-field
                        :label="'Locator'"
                        :hint="'Locator for element to screenshot'"
                        :value.sync="value.property.locator"
                        :required="true"
                ></locator-field>

                <path-field
                        :label="'Filename'"
                        :hint="'Path to created screenshot'"
                        :value.sync="value.property.filename"
                ></path-field>
            </v-card-text>

            <return-values-field
                :value.sync="value.property.returnVal"
        ></return-values-field>
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

    export default class CaptureElementScreenshotPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Captures a screenshot from the element identified by locator and embeds it into log file."
            this.$emit("setDescription", description)
        }
    }
</script>