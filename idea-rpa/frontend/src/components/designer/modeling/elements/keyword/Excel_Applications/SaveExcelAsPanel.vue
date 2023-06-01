<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <path-field
                        :label="'File name'"
                        :hint="'Where to save file'"
                        :value.sync="value.property.file_name"
                        :required="true"
                ></path-field>
            </v-card-text>

            <v-card-text>
                <v-switch
                        v-model="value.property.autofit"
                        label="Autofit"
                        hint="autofit cell widths if True, defaults to False"
                        persistent-hint
                        class="py-0 mb-6"
                ></v-switch>
            </v-card-text>

            <v-card-text>
                <variables-field 
                        :label="'File format'"
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
        mounted(){
            var description = "Save Excel with name if workbook is open."
            this.$emit("setDescription", description)
        }
    }
</script>