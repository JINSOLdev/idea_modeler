<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Url'"
                        :hint="'Source URL for file'"
                        :value.sync="value.property.url"
                ></variables-field>

                <path-field
                        :label="'Target File'"
                        :hint="'Path to file'"
                        :value.sync="value.property.target_file"
                ></path-field>

                <switch-field
                        :label="'Overwrite'"
                        :hint="'Overwrite destination file if it exists'"
                        :value.sync="value.property.overwrite"
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
    export default class DownloadPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "An alias for the HTTP Get keyword."
            this.$emit("setDescription", description)
        }
    }
</script>