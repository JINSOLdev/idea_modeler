<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Start'"
                        :hint="'Row or name to start deletion from'"
                        :value.sync="value.property.start"
                ></variables-field>

                <variables-field
                        :label="'End'"
                        :hint="'Optional row number or name for last column to delete'"
                        :value.sync="value.property.end"
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
    export default class DeleteRowsPanel extends Mixins(KeywordPanel) {
    }
</script>