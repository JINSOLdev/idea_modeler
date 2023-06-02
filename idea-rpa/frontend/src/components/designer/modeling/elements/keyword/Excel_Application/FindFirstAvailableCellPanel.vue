<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field 
                        :label="'Worksheet'"
                        :hint="'Worksheet to handle'"
                        :value.sync="value.property.worksheet"
                ></variables-field> 
            </v-card-text>

            <v-card-text>
                <variables-field 
                        :label="'Row'"
                        :hint="'Starting row for search'"
                        :value.sync="value.property.row"
                ></variables-field> 
            </v-card-text>

            <v-card-text>
                <variables-field 
                        :label="'Column'"
                        :hint="'Starting column for search'"
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
    export default class FindFirstAvailableCellPanel extends Mixins(KeywordPanel) {
        mounted(){
            var description = "Find first available free cell."
            this.$emit("setDescription", description)
        }
    }
</script>