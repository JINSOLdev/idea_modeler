<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>                
                <variables-field
                        :label="'Table'"
                        :hint="'Table to read'"
                        :value.sync="value.property.table"
                        :required="true"
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
    export default class GetTableDimensionsPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Return table dimensions, as (rows, columns)."
            this.$emit("setDescription", description)
        }
    }
</script>