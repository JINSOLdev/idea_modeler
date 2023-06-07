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
                        :value.sync="value.property.sourcepath"
                ></path-field>
                <path-field
                        :label="'Output Path'"
                        :hint="'Path to the target PDf'"
                        :value.sync="value.property.outputpath"
                ></path-field>
                <variables-field 
                        :label="'Pages'"
                        :hint="'Page numbers to extract from PDF.(comma separated list, numbers start from 1) Defaults to all pages.'"
                        :value.sync="value.property.pages"
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
    export default class ExtractPagesFromPdfPanel extends Mixins(KeywordPanel) {
    }
</script>