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
                ></variables-field>

                <variables-field
                        :label="'Start'"
                        :hint="'Start index (inclusive)'"
                        :value.sync="value.property.start"
                ></variables-field>

                <variables-field
                        :label="'End'"
                        :hint="'End index (exclusive)'"
                        :value.sync="value.property.end"
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
    export default class GetTableSlicePanel extends Mixins(KeywordPanel) {
    }
</script>