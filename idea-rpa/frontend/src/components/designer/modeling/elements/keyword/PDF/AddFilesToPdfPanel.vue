<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Files'"
                        :hint="'List of filepaths to add into PDF(can be either images or PDFs)'"
                        :value.sync="value.property.files"
                ></variables-field>

                <Path-field
                        :label="'Target Document'"
                        :hint="'Path of target PDF'"
                        :value.sync="value.property.target_document"
                ></Path-field>

                <switch-field
                        :label="'Append'"
                        :hint="'Appends files to existing document'"
                        :value.sync="value.property.append"
                ></switch-field>
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
    export default class AddFilesToPdfPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Add images and/or pdfs to new PDF document"
            this.$emit("setDescription", description)
        }
    }
</script>