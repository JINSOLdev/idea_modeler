<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <path-field
                        :label="'Sources'"
                        :hint="'File(s) to copy'"
                        :value.sync="value.property.sources"
                        :required="true"
                ></path-field>

                <path-field
                        :label="'Destination'"
                        :hint="'Destination directory'"
                        :value.sync="value.property.destination"
                        :required="true"
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
    export default class CopyFilesPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Copy multiple files to destination folder."
            this.$emit("setDescription", description)
        }
    }
</script>