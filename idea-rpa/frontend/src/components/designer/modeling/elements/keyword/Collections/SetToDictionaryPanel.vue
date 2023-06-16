<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>
            
            <v-card-text>
                <variables-field
                        :label="'Dictionary'"
                        :value.sync="value.property.dictionary"
                        :hint="'Dictionary to modify'"
                        :required="true"
                ></variables-field>
                <variables-field
                        :label="'Items'"
                        :value.sync="value.property.items"
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
    export default class SetToDictionaryPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Adds the given key_value_pairs and items to the dictionary."
            this.$emit("setDescription", description)
        }
    }
</script>