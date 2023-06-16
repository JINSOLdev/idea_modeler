<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Column'"
                        :hint="'Insert before the column'"
                        :value.sync="value.property.column"
                        :required="true"
                ></variables-field>

                <variables-field
                        :label="'Amount'"
                        :hint="'Number of columns to insert, default 1'"
                        :value.sync="value.property.amount"
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
    export default class InsertColumnsBeforePanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Insert column or columns before a column number/name."
            this.$emit("setDescription", description)
        }
    }
</script>