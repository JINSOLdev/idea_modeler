<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <path-field
                        :label="'Source PDF'"
                        :hint="'Path to source PDF'"
                        :value.sync="value.property.source_pdf"
                ></path-field>
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
    export default class ClosePdfPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Close PDF file descriptor for a certain file."
            this.$emit("setDescription", description)
        }
    }
</script>