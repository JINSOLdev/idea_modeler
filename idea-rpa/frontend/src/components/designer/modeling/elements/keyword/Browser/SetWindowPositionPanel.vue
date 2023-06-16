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
                        :required="true"
                ></variables-field>

                <variables-field
                        :label="'Y'"
                        :hint="'Position along the Y-axis'"
                        :value.sync="value.property.y"
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
    
    export default class SetWindowPositionPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Sets window position using x and y coordinates."
            this.$emit("setDescription", description)
        }
    }
</script>