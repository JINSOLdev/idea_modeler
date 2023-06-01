<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <Locator-field
                        :label="'Locator'"
                        :hint="'Location of element to read text from.'"
                        :value.sync="value.property.locator"
                        :required="true"
                ></Locator-field>
            </v-card-text>

            <v-card-text>
                    <v-switch
                        v-model="value.property.invert"
                        label="Invert"
                        hint="Invert image colors, useful for reading white text on dark background"
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
    export default class ReadTextPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Read text using OCR from the screen, or an area of the screen defined by the given locator."
            this.$emit("setDescription", description)
        }
    }
</script>