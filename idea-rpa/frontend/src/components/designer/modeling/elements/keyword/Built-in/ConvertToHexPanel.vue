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
                        :label="'Base'"
                        :hint="'Base of input value'"
                        :value.sync="value.property.base"
                ></variables-field>
                
                <variables-field
                        :label="'Prefix'"
                        :hint="'Optional prefix'"
                        :value.sync="value.property.prefix"
                ></variables-field>

                <variables-field
                        :label="'Length'"
                        :hint="'Minimum length (excluding prefix)'"
                        :value.sync="value.property.length"
                ></variables-field>

                <switch-field
                        :label="'Lowercase'"
                        :hint="'Lowercase outputs'"
                        :value.sync="value.property.lowercase"
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
    export default class ConvertToHexPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Converts the given item to a hexadecimal string."
            this.$emit("setDescription", description)
        }
    }
</script>