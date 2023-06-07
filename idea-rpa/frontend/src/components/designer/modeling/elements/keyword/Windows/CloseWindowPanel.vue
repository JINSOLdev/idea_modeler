<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <locator-field
                        :value.sync="value.property.locator"
                ></locator-field>

                <variables-field
                        :label="'Timeout'"
                        :hint="'Time to wait for locator match (in seconds)'"
                        :placeholder="'None'"
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
    export default class CloseWindowPanel extends Mixins(KeywordPanel) {
    }
</script>