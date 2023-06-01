<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Row'"
                        :hint="'Insert after the row'"
                        :value.sync="value.property.row"
                        :required="true"
                ></variables-field>
            </v-card-text>

            <v-card-text>
                <variables-field
                        :label="'Amount'"
                        :hint="'Number of rows to insert, default 1'"
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
    export default class InsertRowsAfterPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Insert row or rows after a row number."
            this.$emit("setDescription", description)
        }
    }
</script>