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

                <v-switch
                        v-model="value.property.autofit"
                        label="Autofit"
                        hint="Autofit cell widths if True, defaults to False"
                        persistent-hint
                        class="py-0 mb-6"
                ></v-switch>


                <variables-field
                        :label="'File fornat'"
                        :hint="'Format of file'"
                        :value.sync="value.property.file_format"
                ></variables-field>

             
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
    export default class SaveExcelAsPanel extends Mixins(KeywordPanel) {
    }
</script>