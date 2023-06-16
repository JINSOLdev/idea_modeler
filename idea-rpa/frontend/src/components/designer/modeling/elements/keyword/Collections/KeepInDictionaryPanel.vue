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
                        :label="'Keys'"
                        :hint="'Keys to keep in dictionary'"
                        :value.sync="value.property.keys"
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
    export default class KeepInDictionaryPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Keeps the given keys in the dictionary and removes all other."
            this.$emit("setDescription", description)
        }
    }
</script>