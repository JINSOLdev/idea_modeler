<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <path-field
                        :label="'Path'"
                        :hint="'Path to Excel file'"
                        :value.sync="value.property.path"
                        :required="true"
                ></path-field>

                <switch-field
                        :value.sync="value.property.data_only"
                        label="'Data Only'"
                        hint="'Return calculated values instead of formulas (.xlsx only)'"
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
    export default class OpenWorkbookPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Open an existing Excel workbook."
            this.$emit("setDescription", description)
        }
    }
</script>