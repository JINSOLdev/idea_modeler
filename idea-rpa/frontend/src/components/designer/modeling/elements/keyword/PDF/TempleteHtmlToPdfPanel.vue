<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <path-field
                        :label="'Template'"
                        :hint="'Path to the HTML template'"
                        :value.sync="value.property.template"
                ></path-field>
                

                <path-field
                        :label="'Output Path'"
                        :hint="'Path where to save PDF document'"
                        :value.sync="value.property.outputpath"
                ></path-field>
                <variables-field
                        :label="'Variables'"
                        :hint="'Dictionary of variaables to fill into template, defaults to empty dictionary'"
                        :value.sync="value.property.variables"
                ></variables-field>

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
    export default class TempleteHtmlToPdfPanel extends Mixins(KeywordPanel) {
    }
</script>