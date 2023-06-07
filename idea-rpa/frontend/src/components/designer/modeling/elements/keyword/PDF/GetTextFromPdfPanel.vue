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

                <variables-field 
                        :label="'Pages'"
                        :hint="'Page numbers to extract from PDF.(comma separated list, numbers start from 1) Defaults to all pages.'"
                        :value.sync="value.property.pages"
                    ></variables-field>
                <v-switch
                        v-model="value.property.details"
                        label="Details"
                        hint="Return detailed textboxes information"
                        persistent-hint
                        class="py-0"
                ></v-switch>
                <v-switch
                        v-model="value.property.trim"
                        label="Trim"
                        hint="Whitespace is trimed from the returned text"
                        persistent-hint
                        class="py-0"
                ></v-switch>

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
    }
</script>