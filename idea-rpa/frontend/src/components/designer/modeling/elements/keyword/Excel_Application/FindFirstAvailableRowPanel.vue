<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Worksheet'"
                        :hint="'Worksheet to handle, defaults to active worksheet if None'"
                        :value.sync="value.property.worksheet"
                ></variables-field>

                <variables-field
                        :label="'Row'"
                        :hint="'Starting row for search, defaults to 1'"
                        :value.sync="value.property.row"
                ></variables-field>

                <variables-field
                        :label="'Column'"
                        :hint="'Starting column for search, defaults to 1'"
                        :value.sync="value.property.column"
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
    export default class FindFirstAvailableRowPanel extends Mixins(KeywordPanel) {
    }
</script>