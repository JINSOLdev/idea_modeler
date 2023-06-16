<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Filename'"
                        :hint="'Path to save'"
                        :value.sync="value.property.sheetname"
                ></variables-field>

                <switch-field
                        :value.sync="value.property.autofit"
                        :label="'Autofit'"
                        :hint="'Autofit cell widths if True, defaults to False'"
                ></switch-field>

                <variables-field
                        :label="'File fornat'"
                        :hint="'Format of file'"
                        :value.sync="value.property.file_format"
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
    export default class SaveExcelAsPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Save Excel with name if workbook is open"
            this.$emit("setDescription", description)
        }
    }
</script>