<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'String'"
                        :hint="'String to split.'"
                        :value.sync="value.property.string"
                        :required="true"
                ></variables-field>
            
                <variables-field
                        :label="'Separator'"
                        :hint="'String to use as delimiter'"
                        :value.sync="value.property.separator"
                ></variables-field>

                <variables-field
                        :label="'Max Split'"
                        :hint="'Maximum number of splits'"
                        :value.sync="value.property.max_split"
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
    export default class SplitStringPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Splits the string using separator as a delimiter string."
            this.$emit("setDescription", description)
        }
    }
</script>