<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <path-field
                        :label="'PDF Filename'"
                        :hint="'PDF filename to save'"
                        :value.sync="value.property.pdf_filename"
                        :required="true"
                ></path-field>
            </v-card-text>

            <v-card-text>
                <path-field
                        :label="'Excel Filename'"
                        :hint="'Excel filename to open'"
                        :value.sync="value.property.excel_filename"
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
    export default class ExportAsPdfPanel extends Mixins(KeywordPanel) {
        mounted(){
            var description = "Export Excel as PDF file."
            this.$emit("setDescription", description)
        }
    }
</script>