<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'File'"
                        :hint="'Name of the file, or list of files, to add'"
                        :value.sync="value.property.file"
                ></variables-field>
                
                <variables-field
                        :label="'Archive Name'"
                        :hint="'Filename of the archive'"
                        :value.sync="value.property.archivename"
                ></variables-field>
                
                <variables-field
                        :label="'Folder'"
                        :hint="'Relative path within the archive to which folder the file(s) are added'"
                        :value.sync="value.property.floder"
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
    
    export default class AddToArchivePanel extends Mixins(KeywordPanel) {
    }
</script>