<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <path-field
                        :label="'Source Path'"
                        :hint="'Path to source PDF with fields to update'"
                        :value.sync="value.property.source_path"
                ></path-field>

                <path-field
                        :label="'Output Path'"
                        :hint="'Path where to save the updated PDF'"
                        :value.sync="value.property.output_path"
                ></path-field>
                
                <variables-field 
                        :label="'Newvals'"
                        :hint="'New values when updating many at once. Key-Value dictionary'"
                        :value.sync="value.property.newvals"
                ></variables-field>

                <switch-field
                        :value.sync="value.property.use_appearances_writer"
                        :label="'Use Appearances Writer'"
                        :hint="`For some PDF documents the updated fields won't be visible, try to set this on if you encounter problems (viewing the output PDF in browser might display the field values then)`"
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
    export default class SaveFieldValuesPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Save Field values in PDF if it has fields."
            this.$emit("setDescription", description)
        }

    }
</script>