<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field 
                        :label="'Region'"
                        :hint="'The region to move.'"
                        :value.sync="value.property.region"
                        :required="true"
                ></variables-field> 
            </v-card-text>

            <v-card-text>
                <variables-field 
                        :label="'Left'"
                        :hint="'Amount of pixels to move left/right.'"
                        :value.sync="value.property.left"
                        :required="true"
                ></variables-field> 
            </v-card-text>

            <v-card-text>
                <variables-field 
                        :label="'Top'"
                        :hint="'Amount of pixels to move up/down.'"
                        :value.sync="value.property.top"
                        :required="true"
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
    export default class MoveRegionPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Return a new Region with an offset from the given region."
            this.$emit("setDescription", description)
        }
    }
</script>