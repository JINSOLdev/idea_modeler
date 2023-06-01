<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field 
                        :label="'Left'"
                        :hint="'Left edge coordinate.'"
                        :value.sync="value.property.left"
                        :required="true"
                ></variables-field> 
            </v-card-text>

            <v-card-text>
                <variables-field 
                        :label="'Top'"
                        :hint="'Top edge coordinate.'"
                        :value.sync="value.property.top"
                        :required="true"
                ></variables-field> 
            </v-card-text>

            <v-card-text>
                <variables-field 
                        :label="'Right'"
                        :hint="'Right edge coordinate.'"
                        :value.sync="value.property.right"
                        :required="true"
                ></variables-field> 
            </v-card-text>

            <v-card-text>
                <variables-field 
                        :label="'Bottom'"
                        :hint="'Bottom edge coordinate.'"
                        :value.sync="value.property.bottom"
                        :required="true"
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
    export default class DefineRegionPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Return a new Region with the given dimensions."
            this.$emit("setDescription", description)
        }
    }
</script>