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
                
                <variables-field
                        :label="'Trim'"
                        :hint="'Remove empty rows from end'"
                        :value.sync="value.property.trim"
                ></variables-field>

                <variables-field
                        :label="'Columns'"
                        :hint="'Names of columns'"
                        :value.sync="value.property.columns"
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
    export default class CreateTablePanel extends Mixins(KeywordPanel) {
    }
</script>