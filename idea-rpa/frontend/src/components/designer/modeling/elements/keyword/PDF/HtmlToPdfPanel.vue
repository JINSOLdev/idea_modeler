<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Content'"
                        :hint="'HTML content'"
                        :value.sync="value.property.content"
                        :required="true"
                ></variables-field>

                <path-field
                        :label="'Output Path'"
                        :hint="'Path where to save the PDF document'"
                        :value.sync="value.property.output_path"
                        :required="true"
                ></path-field>
                
                <variables-field
                        :label="'Encoding'"
                        :hint="'Codec used for text I/O'"
                        :value.sync="value.property.encoding"
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
    export default class HtmlToPdfPanel extends Mixins(KeywordPanel) {
        
 mounted() {
            var description = "Generate a PDF file from HTML content."
            this.$emit("setDescription", description)
        }

    }
</script>