<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Figure'"
                        :hint="'PDF Figure object which will be saved as an image. The PDF Figure object can be determined from the Get All Figures keyword'"
                        :value.sync="value.property.figure"
                        :required="true"
                ></variables-field>

                <path-field
                        :label="'Images Folder'"
                        :hint="'Directory where image files will be created'"
                        :value.sync="value.property.images_folder"
                ></path-field>
                
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
    export default class SaveFiguresAsImagePanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Try to save the image data from Figure object, and return the file name, if successful."
            this.$emit("setDescription", description)
        }

    }
</script>