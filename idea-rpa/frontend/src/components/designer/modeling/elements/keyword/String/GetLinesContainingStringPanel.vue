<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'String'"
                        :hint="'String to read.'"
                        :value.sync="value.property.string"
                        :required="true"
                ></variables-field>
            
                <variables-field
                        :label="'Pattern'"
                        :hint="'Text to match'"
                        :value.sync="value.property.pattern"
                        :required="true"
                ></variables-field>

                <switch-field
                        :label="'Case Insensitive'"
                        :hint="'Ignore case when searching'"
                        :value.sync="value.property.case_insensitive"
                ></switch-field>
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
    export default class GetLinesContainingStringPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Returns lines of the given string that contain the pattern."
            this.$emit("setDescription", description)
        }
    }
</script>