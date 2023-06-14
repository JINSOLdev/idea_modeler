<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <locator-field
                        :label="'Locator'"
                        :value.sync="value.property.locator"
                        :hint="'Locator for window to control'"
                ></locator-field>
                
                <switch-field
                        :value.sync="value.property.foreground"
                        :label="'Foreground'"
                        :hint="'Bring window to foreground'"
                ></switch-field>
                
                <variables-field
                        :label="'Timeout'"
                        :placeholder="'None'"
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
    export default class ControlWindowPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Controls the window defined by the locator."
            this.$emit("setDescription", description)
        }
    }
</script>