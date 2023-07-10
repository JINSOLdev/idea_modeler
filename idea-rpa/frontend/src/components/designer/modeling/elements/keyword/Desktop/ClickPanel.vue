<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <Locator-field
                        :label="'Locator'"
                        :hint="'Locator for click position'"
                        :value.sync="value.property.locator"
                        :required="true"
                ></Locator-field>
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
    export default class ClickPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Click at the element indicated by locator."
            this.$emit("setDescription", description)
        }
    }
</script>