<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <Locator-field
                        :label="'Locator'"
                        :hint="'Locator for element'"
                        :value.sync="value.property.locator"
                        :required="true"
                ></Locator-field>
            </v-card-text>

            <v-card-text>
                <Variables-field
                        :label="'Xoffset'"
                        :hint="'X-axis offset in pixels'"
                        :value.sync="value.property.xoffset"
                        :required="true"
                ></Variables-field>
            </v-card-text>

            <v-card-text>
                <Variables-field
                        :label="'Yoffset'"
                        :hint="'Y-axis offset in pixels'"
                        :value.sync="value.property.yoffset"
                        :required="true"
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
    export default class ClickElementAtCoordinatesPanel extends Mixins(KeywordPanel) {
    }
</script>