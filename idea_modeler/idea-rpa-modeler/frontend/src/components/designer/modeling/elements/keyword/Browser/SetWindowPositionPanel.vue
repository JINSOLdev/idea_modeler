<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'X'"
                        :hint="'Position along the X-axis'"
                        :value.sync="value.property.x"
                ></variables-field>
            </v-card-text>

            <v-card-text>
                <variables-field
                        :label="'Y'"
                        :hint="'Position along the Y-axis'"
                        :value.sync="value.property.y"
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
    
    export default class SetWindowPositionPanel extends Mixins(KeywordPanel) {
    }
</script>