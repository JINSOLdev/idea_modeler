<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>
            
            <v-card-text>
                <variables-field
                        :label="'Item'"
                        :hint="'Value to convert'"
                        :value.sync="value.property.item"
                ></variables-field>
                
                <variables-field
                        :label="'Precision'"
                        :hint="'Number of decimal digits to round to'"
                        :value.sync="value.property.precision"
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
    export default class ConvertToNumberPanel extends Mixins(KeywordPanel) {
    }
</script>