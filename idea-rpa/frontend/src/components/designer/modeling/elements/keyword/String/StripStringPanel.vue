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
                        :label="'Mode'"
                        :hint="'Type of split, e.g. `left`, `right`, or `both`.'"
                        :value.sync="value.property.start"
                ></variables-field>

                <variables-field
                        :label="'Characters'"
                        :hint="'Characters to strip'"
                        :value.sync="value.property.characters"
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
    export default class StripStringPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Remove leading and/or trailing whitespaces from the given string."
            this.$emit("setDescription", description)
        }
    }
</script>