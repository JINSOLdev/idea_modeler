<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Table'"
                        :hint="'Table to modify'"
                        :value.sync="value.property.table"
                        :required="true"
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
    export default class FilterEmptyRowsPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Remove all rows from a table which have only None values."
            this.$emit("setDescription", description)
        }
    }
</script>