<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Pdf filename'"
                        :hint="'PDF filename to save'"
                        :value.sync="value.property.pdf_filename"
                ></variables-field>

                <variables-field
                        :label="'Excel filename'"
                        :hint="'Excel filename to open. If not given, the current workbook will open.'"
                        :value.sync="value.property.excel_filename"
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
    export default class AddNewSheetPanel extends Mixins(KeywordPanel) {
    }
</script>