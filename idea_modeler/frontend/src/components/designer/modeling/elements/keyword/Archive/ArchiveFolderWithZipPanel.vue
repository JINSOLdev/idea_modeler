<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <path-field
                        :label="'Folder'"
                        :hint="'path to the folder to archive'"
                        :value.sync="path.property.folder"
                ></path-field>
                
                <variables-field
                        :label="'Archive Name'"
                        :hint="'Filename of the archive'"
                        :value.sync="value.property.archivename"
                ></variables-field>

                <return-values-field
                    :hint="'Should subdirectories be included into the archive'"
                    :value.sync="value.property.recursive"
                ></return-values-field>


                <variables-field
                        :label="'Include'"
                        :hint="'The file pattern to include in the archive, uses Unix shell style. Default is to include all files'"
                        :value.sync="value.property.include"
                ></variables-field>
                
                <variables-field
                        :label="'Exclude'"
                        :hint="'The file pattern to exclude in the archive, uses Unix shell style. Default is to exclude all files'"
                        :value.sync="value.property.exclude"
                ></variables-field>

                <variables-field
                        :label="'Compression'"
                        :hint="'Type of the package compression method (stored, deflated, bzip2, lzma)'"
                        :value.sync="value.property.compression"
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
    
    export default class ArchiveFolderWithZipPanel extends Mixins(KeywordPanel) {
    }
</script>