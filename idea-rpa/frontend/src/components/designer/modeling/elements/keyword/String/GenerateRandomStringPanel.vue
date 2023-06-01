<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Length'"
                        :hint="'Amount of characters in string'"
                        :value.sync="value.property.length"
                ></variables-field>
            
                <variables-field
                        :label="'Chars'"
                        :hint="'Allowed characters in string'"
                        :value.sync="value.property.chars"
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
    export default class GenerateRandomStringPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Generates a string with a desired length from the given chars."
            this.$emit("setDescription", description)
        }
    }
</script>