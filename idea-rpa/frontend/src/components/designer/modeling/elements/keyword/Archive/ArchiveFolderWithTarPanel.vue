<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <path-field
                        :label="'Folder'"
                        :hint="'Path to the folder to archive'"
                        :value.sync="value.property.folder"
                        :required ="true"
                ></path-field>
                
                <variables-field
                        :label="'Archive Name'"
                        :hint="'Filename of the archive'"
                        :value.sync="value.property.archive_name"
                        :required ="true"
                ></variables-field>

                <switch-field
                        :label="'Recursive'"
                        :hint="'Should subdirectories be included into the archive'"
                        :value.sync="value.property.recursive"
                ></switch-field>

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
    
    export default class ArchiveFolderWithTarPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Create a tar/tar.gz archive of a folder"
            this.$emit("setDescription", description)
        }
    }
</script>