<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Filename'"
                        :hint="'Name of the file to extract from the archive'"
                        :value.sync="value.property.filename"
                        :required ="true"
                ></variables-field>
                
                <path-field
                        :label="'Archive Name'"
                        :hint="'Path to the archive file'"
                        :value.sync="value.property.archive_name"
                        :required="true"
                ></path-field>

                <path-field
                        :label="'Path'"
                        :hint="'Filepath to extract file into, default is the current working directory i.e.robot root'"
                        :value.sync="value.property.path"
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
        mounted() {
            var description = "Extract a file from archive into local directory"
            this.$emit("setDescription", description)
        }
    }
</script>