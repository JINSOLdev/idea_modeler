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
                        :label="'Column'"
                        :hint="'Column to sort with'"
                        :value.sync="value.property.column"
                        :required="true"
                ></variables-field>

                <variables-field
                        :label="'Values'"
                        :hint="'Values for row'"
                        :value.sync="value.property.values"
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
    export default class SetTableRowPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Assign values to a row in the table."
            this.$emit("setDescription", description)
        }
    }
</script>