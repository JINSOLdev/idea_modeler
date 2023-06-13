<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <Path-field
                        :label="'Path'"
                        :hint="'Default save path for workbook'"
                        :value.sync="value.property.path"
                ></Path-field>
            </v-card-text>

            <v-card-text>
                <variables-field
                        :label="'Fmt'"
                        :hint="'Format of workbook, i.e. xlsx ro xls'"
                        :value.sync="value.property.fmt"
                ></variables-field>
            </v-card-text>

            <v-card-text>
                  <variables-field
                        :label="'Sheet Name'"
                        :hint="'Name of initial worksheet'"
                        :value.sync="value.property.Name"
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
    export default class CreateWorkbookPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Create and open a new Excel workbook."
            this.$emit("setDescription", description)
        }
    }
</script>