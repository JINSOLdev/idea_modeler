<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <path-field
                        :label="'Source Path'"
                        :hint="'Path to source PDF'"
                        :value.sync="value.property.source_path"
                ></path-field>

                <variables-field 
                        :label="'Pages'"
                        :hint="'Page numbers to extract from PDF.(comma separated list, numbers start from 1) Defaults to all pages.'"
                        :value.sync="value.property.pages"
                ></variables-field>

                <switch-field
                        :value.sync="value.property.details"
                        :label="'Details'"
                        :hint="'Return detailed textboxes information'"
                ></switch-field>

                <switch-field
                        :value.sync="value.property.trim"
                        :label="'Trim'"
                        :hint="'Whitespace is trimmed from the returned text'"
                ></switch-field>
            </v-card-text>
        </v-card>

        <return-values-field
                :value.sync="value.property.returnVal"
        ></return-values-field>
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
    export default class GetTextFromPdfPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Get text from set of pages in source PDF document."
            this.$emit("setDescription", description)
        }

    }
</script>