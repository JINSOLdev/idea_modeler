<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <locator-field
                        :label="'Locator'"
                        :hint="'Locator for element'"
                        :value.sync="value.property.locator"
                        :required="true"
                ></locator-field>
            </v-card-text>

            <v-card-text>
                <variables-field
                        :label="'Event'"
                        :hint="'Event attribute to trigger'"
                        :value.sync="value.property.event"
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
    
    export default class SimulateEventPanel extends Mixins(KeywordPanel) {
    }
</script>