<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Location'"
                        :hint="'Value location should not match'"
                        :value.sync="value.property.location"
                        :required="true"
                ></variables-field>
            </v-card-text>

            <v-card-text>
                <variables-field
                        :label="'Timeout'"
                        :hint="'Time to wait, e.g. 5 seconds or 1 min'"
                        :value.sync="value.property.timeout"
                ></variables-field>
            </v-card-text>

            <v-card-text>
                <variables-field
                        :label="'Message'"
                        :hint="'Custom error message'"
                        :value.sync="value.property.message"
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
    
    export default class WaitUntilLocationIsNotPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Waits until the current URL is not location."
            this.$emit("setDescription", description)
        }
    }
</script>