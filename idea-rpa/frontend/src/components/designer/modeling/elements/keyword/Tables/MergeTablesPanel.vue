<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Tables'"
                        :hint="'Tables to merge'"
                        :value.sync="value.property.tables"
                ></variables-field>

                <variables-field
                        :label="'Index'"
                        :hint="'Column name or index to use for merge'"
                        :value.sync="value.property.index"
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
    export default class MergeTablesPanel extends Mixins(KeywordPanel) {
    }
</script>