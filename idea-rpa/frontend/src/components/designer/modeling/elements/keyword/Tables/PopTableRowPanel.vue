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
                        :hint="'Row  to pop'"
                        :value.sync="value.property.row"
                ></variables-field>

                <switch-field
                        :label="'As List'"
                        :hint="'Return list instead of dictionary'"
                        :value.sync="value.property.as_list"
                ></switch-field>
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
    export default class PopTableRowPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Remove row from table and return it."
            this.$emit("setDescription", description)
        }
    }
</script>