<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <path-field
                        :label="'Output Path'"
                        :hint="'Path where to save the PDf'"
                        :value.sync="value.property.output_path"
                        :required="true"
                ></path-field>

                <variables-field
                        :label="'Reader'"
                        :hint="'A pypdf reader'"
                        :value.sync="value.property.reader"
                        :required="true"
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
    export default class SavePdfPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Save the contents of a pypdf reader to a new file."
            this.$emit("setDescription", description)
        }

    }
</script>