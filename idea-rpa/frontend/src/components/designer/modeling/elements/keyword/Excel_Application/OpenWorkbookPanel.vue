<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Filename'"
                        :hint="'Path to filename'"
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
    export default class OpenWorkbookPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Open Excel by filename By default sets active worksheet to sheet number 1"
            this.$emit("setDescription", description)
        }
    }
</script>