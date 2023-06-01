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
                        :hint="'Regexp pattern to match'"
                        :value.sync="value.property.pattern"
                        :required="true"
                ></variables-field>

                <variables-field
                        :label="'Groups'"
                        :hint="'Regexp groups to return'"
                        :value.sync="value.property.groups"
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
    export default class GetRegexpMatchesPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Returns a list of all non-overlapping matches in the given string."
            this.$emit("setDescription", description)
        }
    }
</script>