<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <path-field
                        :label="'Image Path'"
                        :hint="'Path to image file to add into PDf'"
                        :value.sync="value.property.image_path"
                ></path-field>

                <path-field
                        :label="'Output Path'"
                        :hint="'Path of target PDf'"
                        :value.sync="value.property.output_path"
                ></path-field>

                <path-field
                        :label="'Source Path'"
                        :hint="'Path to source PDF, if not given add image to currently active PDF'"
                        :value.sync="value.property.source_path"
                ></path-field>
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
    export default class AddWatermarkImageToPdfPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Add an image into an existing or new PDF."
            this.$emit("setDescription", description)
        }
    }
</script>