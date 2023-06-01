<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <Path-field
                        :label="'Path'"
                        :hint="'Path to Excel file'"
                        :value.sync="value.property.path"
                        :required="true"
                ></Path-field>
            </v-card-text>

            <v-card-text>
                    <v-switch
                        v-model="value.property.data_only"
                        label="Data Only"
                        hint="Return calculated values instead of formulas (.xlsx only)"
                        persistent-hint
                        class="py-0 mb-6"
                ></v-switch>
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