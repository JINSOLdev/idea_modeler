<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <switch-field
                        :label="'Visible'"
                        :hint="'Show window after opening'"
                        :value.sync="value.property.visible"
                ></switch-field>

                <switch-field
                        :label="'Display alerts'"
                        :hint="'Show alert popups'"
                        :value.sync="value.property.display_alerts"
                ></switch-field>
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
    export default class OpenApplicationPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Open the Excel application."
            this.$emit("setDescription", description)
        }
    }
</script>