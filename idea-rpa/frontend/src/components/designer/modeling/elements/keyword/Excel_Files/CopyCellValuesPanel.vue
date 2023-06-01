<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Source Range'"
                        :hint="'Single cell or range of cells (e.g. A1:D4)'"
                        :value.sync="value.property.source_range"
                        :required="true"
                ></variables-field>
            </v-card-text>

            <v-card-text>
                <variables-field
                        :label="'Target'"
                        :hint="'Copy to this cell (e.g. G10)'"
                        :value.sync="value.property.target"
                        :required="true"
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
    export default class CopyCellValuesPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Copy cells from source to target."
            this.$emit("setDescription", description)
        }
    }
</script>