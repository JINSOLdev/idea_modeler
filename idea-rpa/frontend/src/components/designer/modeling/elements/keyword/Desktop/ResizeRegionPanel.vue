<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field 
                        :label="'Region'"
                        :hint="'The region to resize.'"
                        :value.sync="value.property.region"
                        :required="true"
                ></variables-field> 
            </v-card-text>

            <v-card-text>
                <variables-field 
                        :label="'Left'"
                        :hint="'Left edge coordinate.'"
                        :value.sync="value.property.left"
                ></variables-field> 
            </v-card-text>

            <v-card-text>
                <variables-field 
                        :label="'Top'"
                        :hint="'Top edge coordinate.'"
                        :value.sync="value.property.top"
                ></variables-field> 
            </v-card-text>

            <v-card-text>
                <variables-field 
                        :label="'Right'"
                        :hint="'Right edge coordinate.'"
                        :value.sync="value.property.right"
                ></variables-field> 
            </v-card-text>

            <v-card-text>
                <variables-field 
                        :label="'Bottom'"
                        :hint="'Bottom edge coordinate.'"
                        :value.sync="value.property.bottom"
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
    export default class ResizeRegionPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Return a resized new Region from a given region."
            this.$emit("setDescription", description)
        }
    }
</script>