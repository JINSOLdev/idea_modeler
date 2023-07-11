<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>
            
            <v-card-text>
                <locator-field
                        :isWindows="true"
                        :value.sync="value.property.locator"
                        :hint="'Optional locator for window'"
                ></locator-field>
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
    export default class ForegroundWindowPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Bring the current active window or the window defined by the locator to the foreground."
            this.$emit("setDescription", description)
        }
    }
</script>