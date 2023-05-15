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
                ></variables-field>


                <variables-field
                        :label="'Count'"
                        :hint="'Number of rows'"
                        :value.sync="value.property.columns"
                ></variables-field>

                <v-switch
                        v-model="value.property.as_list"
                        label="As List"
                        hint="Return list instead of dictionary"
                        persistent-hint
                        class="py-0 mb-6"
                ></v-switch>




                
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
    export default class TableTailPanel extends Mixins(KeywordPanel) {
    }
</script>