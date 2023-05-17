<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>
            
            <v-card-text>
                <variables-field
                        :label="'Input'"
                        :hint="'Value to convert'"
                        :value.sync="value.property.input"
                ></variables-field>    

                <variables-field
                        :label="'Input Type'"
                        :hint="'Type of input, i.e. `text`, `int`, `hex`, or `bin`'"
                        :value.sync="value.property.input_text"
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
    export default class ConvertToBytesPanel extends Mixins(KeywordPanel) {
    }
</script>
