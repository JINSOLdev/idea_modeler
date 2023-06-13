<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field 
                        :label="'Pages'"
                        :hint="'Page numbers to extract from PDF.(comma separated list, numbers start from 1) Defaults to all pages.'"
                        :value.sync="value.property.pages"
                ></variables-field>

                <path-field
                        :label="'Source Path'"
                        :hint="'Path to source PDF'"
                        :value.sync="value.property.source_path"
                        :required="true"
                ></path-field>

                <path-field
                        :label="'Output Path'"
                        :hint="'Path where to save the PDf document'"
                        :value.sync="value.property.output_path"
                ></path-field>

                <switch-field
                        :value.sync="value.property.clockwise"
                        :label="'Clockwise'"
                        :hint="'Direction that page will be rotated to'"
                ></switch-field>

                <variables-field 
                        :label="'Angle'"
                        :hint="'Number of degrees to rotate'"
                        :value.sync="value.property.angle"
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
    export default class RotatePagePanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Rotate pages in source PDF document and save to target PDF document."
            this.$emit("setDescription", description)
        }

    }
</script>