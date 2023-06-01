<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <Locator-field
                        :label="'Source'"
                        :hint="'Locator for start position'"
                        :value.sync="value.property.source"
                        :required="true"
                ></Locator-field>
            </v-card-text>

            <v-card-text>
                <Locator-field
                        :label="'Destination'"
                        :hint="'Locator for destination position'"
                        :value.sync="value.property.destination"
                        :required="true"
                ></Locator-field>
            </v-card-text>

            <v-card-text>
                <variables-field 
                        :label="'Start Delay'"
                        :hint="'Delay in seconds after pressing down mouse button.'"
                        :value.sync="value.property.start_delay"
                ></variables-field> 
            </v-card-text>

            <v-card-text>
                <variables-field 
                        :label="'End Delay'"
                        :hint="'Delay in seconds before releasing mouse button.'"
                        :value.sync="value.property.end_delay"
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
    export default class DragAndDropPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Drag mouse from source to destination while holding the left mouse button."
            this.$emit("setDescription", description)
        }
    }
</script>