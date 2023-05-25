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
                        :hint="'Row to modify'"
                        :value.sync="value.property.row"
                        :required="true"
                ></variables-field>
                <variables-field
                        :label="'Ascending'"
                        :hint="'Sort order'"
                        :value.sync="value.property.ascending"
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
    export default class SortTableByColumnPanel extends Mixins(KeywordPanel) {
    }
</script>