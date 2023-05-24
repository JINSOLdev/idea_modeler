<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>

                <variables-field
                        :label="'Filename'"
                        :hint="'name of the file to extract from the archive'"
                        :value.sync="value.property.filename"
                ></variables-field>
                
                <path-field
                        :label="'Archive Name'"
                        :hint="'Filename of the archive'"
                        :value.sync="path.property.archivename"
                ></path-field>

                <path-field
                        :label="'Path'"
                        :hint="'Filepath to extract file into, default is the current working directory i.e. robot root'"
                        :value.sync="path.property.path"
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
    
    export default class ExtractFileFromArchivePanel extends Mixins(KeywordPanel) {
    }
</script>