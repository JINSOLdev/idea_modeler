<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Figure'"
                        :hint="'PDF Figure object which will be saved as an image. The PDF Figure object can be determined from the Get All Figures ketword'"
                        :value.sync="value.property.figure"
                ></variables-field>

                <path-field
                        :label="'Images Folder'"
                        :hint="'Directory where image files will be created'"
                        :value.sync="value.property.imagesfolder"
                ></path-field>
                <variables-field 
                        :label="'File Prefix'"
                        :hint="'Image filename prefix'"
                        :value.sync="value.property.fileprefix"
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
    }
</script>