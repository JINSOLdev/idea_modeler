<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'String'"
                        :hint="'String to modify.'"
                        :value.sync="value.property.string"
                        :required="true"
                ></variables-field>
            
                <variables-field
                        :label="'Pattern'"
                        :hint="'Regexp pattern to match'"
                        :value.sync="value.property.pattern"
                ></variables-field>

                <variables-field
                        :label="'Replace With'"
                        :hint="'New value for match'"
                        :value.sync="value.property.replace_with"
                ></variables-field>

                <variables-field
                        :label="'Count'"
                        :hint="'Maximum number to replace'"
                        :value.sync="value.property.count"
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
    export default class ReplaceStringUsingRegexpPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Replaces pattern in the given string with replace_with."
            this.$emit("setDescription", description)
        }
    }
</script>