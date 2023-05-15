<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Data'"
                        :hint="'Source data for table'"
                        :value.sync="value.property.data"
                ></variables-field>
                
                <v-switch
                        v-model="value.property.trim"
                        label="Trim"
                        hint="Remove empty rows from end"
                        persistent-hint
                        class="py-0 mb-6"
                ></v-switch>

                <variables-field
                        :label="'Columns'"
                        :hint="'Names of columns'"
                        :value.sync="value.property.columns"
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
    export default class CreateTablePanel extends Mixins(KeywordPanel) {
    }
</script>