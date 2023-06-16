<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>
            
            <v-card-text>
                <variables-field
                        :label="'List'"
                        :value.sync="value.property.list"
                        :required="true"
                ></variables-field>

                <variables-field
                        :label="'Start'"
                        :value.sync="value.property.start"
                ></variables-field>

                <variables-field
                        :label="'End'"
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
    export default class GetIndexFromListPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Returns the index of the first occurrence of the value on the list."
            this.$emit("setDescription", description)
        }
    }
</script>