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
    export default class ConvertToIntegerPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Converts the given item to an integer number."
            this.$emit("setDescription", description)
        }
    }
</script>