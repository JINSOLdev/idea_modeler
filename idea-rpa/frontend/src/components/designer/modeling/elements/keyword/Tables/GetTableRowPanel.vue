<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Table'"
                        :hint="'Table to read from'"
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
                        :label="'As List'"
                        :hint="'Return list instead of dictionary'"
                        :value.sync="value.property.as_list"
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
    export default class GetTableRowPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Get a single row from a table."
            this.$emit("setDescription", description)
        }
    }
</script>