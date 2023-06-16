<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Filename'"
                        :hint="'PDF to export WORD into'"
                        :value.sync="value.property.filename"
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
    export default class ExportToPdfPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Export active document into PDF file."
            this.$emit("setDescription", description)
        }
    }
</script>