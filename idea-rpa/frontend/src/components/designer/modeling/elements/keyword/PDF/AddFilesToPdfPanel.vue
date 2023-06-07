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

                <path-field
                        :label="'Target Document'"
                        :hint="'Path of target PDF'"
                        :value.sync="value.property.targetdocument"
                ></path-field>
                <v-switch
                        v-model="value.property.append"
                        label="Append"
                        hint="Aooends files to existing document"
                        persistent-hint
                        class="py-0"
                ></v-switch>
                

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
    }
</script>