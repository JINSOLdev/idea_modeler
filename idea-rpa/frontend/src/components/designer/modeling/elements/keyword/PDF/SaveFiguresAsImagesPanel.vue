<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <path-field
                        :label="'Source Path'"
                        :hint="'Path to source PDF document'"
                        :value.sync="value.property.source_path"
                ></path-field>

                <path-field
                        :label="'Images Folder'"
                        :hint="'Directory where image files will be created'"
                        :value.sync="value.property.image_folder"
                ></path-field>

                <variables-field
                        :label="'Pages'"
                        :hint="'Target figures in the pages, can be single page or range (numbers start from 1, i.e. 1-8). defaults to all pages being scanned for figures to save'"
                        :value.sync="value.property.pages"
                ></variables-field>
                
                <variables-field 
                        :label="'File Prefix'"
                        :hint="'Image filename prefix'"
                        :value.sync="value.property.file_prefix"
                ></variables-field>
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
    export default class SaveFiguresAsImagesPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Save figures from given PDF document as image files."
            this.$emit("setDescription", description)
        }

    }
</script>