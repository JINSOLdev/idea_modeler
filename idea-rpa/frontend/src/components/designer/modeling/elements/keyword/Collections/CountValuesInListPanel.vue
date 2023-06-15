<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>
            
            <v-card-text>
                <variables-field
                        :label="'List'"
                        :hint="'List to search'"
                        :value.sync="value.property.list_"
                ></variables-field>

                <variables-field
                        :label="'Value'"
                        :hint="'Value being counted'"
                        :value.sync="value.property.value"
                ></variables-field>

                <variables-field
                        :label="'Start'"
                        :hint="'Start index for search'"
                        :value.sync="value.property.start"
                ></variables-field>

                <variables-field
                        :label="'End'"
                        :hint="'End index for search'"
                        :value.sync="value.property.end"
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
    export default class CountValuesInListPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Returns the number of occurrences of the given value in list."
            this.$emit("setDescription", description)
        }
    }
</script>