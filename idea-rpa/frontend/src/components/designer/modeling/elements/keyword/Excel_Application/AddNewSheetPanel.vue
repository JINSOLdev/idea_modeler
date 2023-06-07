<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Sheet'"
                        :hint="'Name of sheet'"
                        :value.sync="value.property.sheetname"
                ></variables-field>

                <variables-field
                        :label="'Tab'"
                        :hint="'Name of tab'"
                        :value.sync="value.property.tabname"
                ></variables-field>

                <switch-field
                        :value.sync="value.property.create_workbook"
                        :label="'Create workbook'"
                        :hint="'Create workbook if does not exist'"
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
    export default class AddNewSheetPanel extends Mixins(KeywordPanel) {
    }
</script>