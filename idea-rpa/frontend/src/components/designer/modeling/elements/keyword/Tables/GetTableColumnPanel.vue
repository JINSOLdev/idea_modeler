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

                <variables-field
                        :label="'Column'"
                        :hint="'Column to read'"
                        :value.sync="value.property.column"
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
    export default class GetTableColumnPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Get all values for a single column ini a table."
            this.$emit("setDescription", description)
        }
    }
</script>