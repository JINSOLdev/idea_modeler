<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field 
                        :label="'Confidence'"
                        :hint="'Set default confidence.'"
                        :value.sync="value.property.confidence"
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
    export default class SetDefaultConfidencePanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Set the default template matching confidence."
            this.$emit("setDescription", description)
        }
    }
</script>