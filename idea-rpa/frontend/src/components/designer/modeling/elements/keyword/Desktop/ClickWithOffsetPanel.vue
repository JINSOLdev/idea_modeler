<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <Locator-field
                        :label="'Locator'"
                        :hint="'Locator for click start position'"
                        :value.sync="value.property.locator"
                        :required="true"
                ></Locator-field>
            </v-card-text>

            <v-card-text>
                <variables-field 
                        :label="'x'"
                        :hint="'Click horizontal offset in pixels'"
                        :value.sync="value.property.x"
                ></variables-field> 
            </v-card-text>

            <v-card-text>
                <variables-field 
                        :label="'y'"
                        :hint="'Click vertical offset in pixels'"
                        :value.sync="value.property.y"
                ></variables-field> 
            </v-card-text>

            <v-card-text>
                <variables-field 
                        :label="'Action'"
                        :hint="'Click action, e.g. right click'"
                        :value.sync="value.property.action"
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
    export default class ClickWithOffsetPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Click at a given pixel offset from the given locator."
            this.$emit("setDescription", description)
        }
    }
</script>