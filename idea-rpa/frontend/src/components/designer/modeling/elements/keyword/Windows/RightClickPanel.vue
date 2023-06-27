<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <locator-field
                        :isWindows="true"
                        :label="'Locator'"
                        :hint="'Locator for element to click'"
                        :value.sync="value.property.locator"
                        :required="true"
                ></locator-field>

                <variables-field 
                        :label="'Timeout'"
                        :hint="'Time to wait for locator match (in seconds)'"
                        :value.sync="value.property.timeout"
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
    export default class RightClickPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Right mouse click on element matching given locator."
            this.$emit("setDescription", description)
        }
    }
</script>