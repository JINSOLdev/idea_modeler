<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>

                //path

                <variables-field
                        :label="'Fmt'"
                        :hint="'Format of workbook, i.e. xlsx ro xls'"
                        :value.sync="value.property.fmt"
                ></variables-field>
                  <variables-field
                        :label="'Sheet Name'"
                        :hint="'Name of initial worksheet'"
                        :value.sync="value.property.Name"
                ></variables-field>

                <v-switch
                        v-model="value.property.Exist Ok"
                        label="Exist Ok"
                        hint="Raise an error if name exist"
                        persistent-hint
                        class="py-0 mb-6"
                ></v-switch>

                 <v-switch
                        v-model="value.property.header"
                        label="Header"
                        hint="Write headers to worksheet"
                        persistent-hint
                        class="py-0 mb-6"
                ></v-switch>

                <variables-field
                        :label="'Start'"
                        :hint="'Start row index'"
                        :value.sync="value.property.start"
                ></variables-field>

                <v-switch
                        v-model="value.property.formattingAsEmpty"
                        label="Formatting As Empty"
                        hint="Consider rows containing only formatting as empty"
                        persistent-hint
                        class="py-0"
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
    export default class CreateWorkbookPanel extends Mixins(KeywordPanel) {
    }
</script>