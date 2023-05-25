<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <path-field
                        :label="'Archive Name'"
                        :hint="'Path to the archive file'"
                        :value.sync="value.property.archive_name"
                        :required ="true"
                ></path-field>
                
                <path-field
                        :label="'Path'"
                        :hint="'Filepath to extract file into, default is the current working directory i.e. robot root'"
                        :value.sync="value.property.path"
                ></path-field>

                <variables-field
                        :label="'Members'"
                        :hint="'Single file, or list of files to extract from the archive, default is to extract all files'"
                        :value.sync="value.property.members"
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
    
    export default class ExtractArchivePanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Extract files from archive into local directory"
            this.$emit("setDescription", description)
        }
    }
</script>