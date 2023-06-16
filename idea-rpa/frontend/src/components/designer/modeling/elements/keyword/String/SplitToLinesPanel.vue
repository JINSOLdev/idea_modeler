<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'String'"
                        :hint="'String to split.'"
                        :value.sync="value.property.string"
                        :required="true"
                ></variables-field>

                <variables-field
                        :label="'Start'"
                        :hint="'Start line index.'"
                        :value.sync="value.property.start"
                ></variables-field>

                <variables-field
                        :label="'End'"
                        :hint="'End line index.'"
                        :value.sync="value.property.end"
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
    export default class SplitToLinesPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Splits the given string to lines."
            this.$emit("setDescription", description)
        }
    }
</script>