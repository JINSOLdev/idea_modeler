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
                <variables-field
                        :label="'Row'"
                        :hint="'Row of cell'"
                        :value.sync="value.property.row"
                        :required="true"
                ></variables-field>

                <variables-field
                        :label="'Column'"
                        :hint="'Column of cell'"
                        :value.sync="value.property.row"
                        :required="true"
                ></variables-field>

                <variables-field
                        :label="'Value'"
                        :hint="'Value to set'"
                        :value.sync="value.property.value"
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
    export default class SetTableCellPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Set a cell value in a table."
            this.$emit("setDescription", description)
        }
    }
</script>