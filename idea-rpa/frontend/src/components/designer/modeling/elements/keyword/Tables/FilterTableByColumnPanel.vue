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
                        :hint="'Column to filter with'"
                        :value.sync="value.property.column"
                        :required="true"
                ></variables-field>

                <variables-field
                        :label="'Operator'"
                        :hint="'Filtering operator e.g. >, <, ==, contains'"
                        :value.sync="value.property.operator"
                        :required="true"
                ></variables-field>

                <variables-field
                        :label="'Value'"
                        :hint="'Value to compare column to'"
                        :value.sync="value.property.value"
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
    export default class FilterTableByColumnPanel extends Mixins(KeywordPanel) {
    }
</script>