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

                <switch-field
                        :value.sync="value.property.trim"
                        :label="'Trim'"
                        :hint="'Trim whitespace from the text'"
                ></switch-field>

                <variables-field 
                        :label="'Pagenum'"
                        :hint="'Page number to convert. Defaults to all pages getting converted. Numvers start from 1'"
                        :value.sync="value.property.pagenum"
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
    export default class ConvertPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Parse source PDF into entities."
            this.$emit("setDescription", description)
        }
    }
</script>