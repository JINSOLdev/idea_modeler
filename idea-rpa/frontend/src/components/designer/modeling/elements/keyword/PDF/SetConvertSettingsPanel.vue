<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Line Margin'"
                        :hint="'Relative margin between bounding lines, default 0.5'"
                        :value.sync="value.property.line_margin"
                ></variables-field>

                <variables-field
                        :label="'Wood Margin'"
                        :hint="'Relative margin between woods, default 0.1'"
                        :value.sync="value.property.wood_margin"
                ></variables-field>

                <variables-field
                        :label="'Char Margin'"
                        :hint="'Relative margin between characters, default 2.0'"
                        :value.sync="value.property.char_margin"
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
    export default class SetConvertSettingsPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Change settings for PDFMiner document coversion."
            this.$emit("setDescription", description)
        }

    }
</script>