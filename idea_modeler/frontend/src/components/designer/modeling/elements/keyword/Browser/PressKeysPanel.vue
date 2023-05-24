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
                <Variables-field
                        :label="'Keys'"
                        :hint="'Keys to press, e.g.AAA, CTRL+C, RETURN'"
                        :value.sync="value.property.keys"
                        :isMultiple="true"
                ></Variables-field>
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
    
    export default class PressKeysPanel extends Mixins(KeywordPanel) {
    }
</script>