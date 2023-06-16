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

                <Variables-field
                        :label="'Modifier'"
                        :hint="'Click with modifier key'"
                        :value.sync="value.property.modifier"
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
    export default class ClickButtonWhenVisiblePanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Click button identified by locator, once it becomes visible."
            this.$emit("setDescription", description)
        }
    }
</script>