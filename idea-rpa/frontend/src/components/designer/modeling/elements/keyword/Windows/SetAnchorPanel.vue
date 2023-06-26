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
                        :hint="'Locator for element'"
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
    export default class SetAnchorPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Set anchor to an element specified by the locator."
            this.$emit("setDescription", description)
        }
    }
</script>