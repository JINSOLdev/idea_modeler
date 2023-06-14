<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Locator'"
                        :hint="`Element to set anchor to. this can be prefixed with either 'text', 'subtext', 'regex', 'coords' to find the anchor by text or coordinates. the 'text' strategy is assumed`"
                        :value.sync="value.property.locator"
                        :required="true"
                ></variables-field>

                <variables-field 
                        :label="'Pagenum'"
                        :hint="'Page number where search is performed on'"
                        :value.sync="value.property.pagenum"
                ></variables-field>

                <variables-field 
                        :label="'Direction'"
                        :hint="`in which direction to search for text elements. this can be any of 'top' or 'up' 'bottom or down', 'left or right'`"
                        :value.sync="value.property.direction"
                ></variables-field>

                <variables-field 
                        :label="'Closest Neighbours'"
                        :hint="'how many neighbours to return at most, sorted by the distance from the current anchor'"
                        :value.sync="value.property.closest_neighbours"
                ></variables-field>

                <switch-field
                        :value.sync="value.property.strict"
                        :label="'Strict'"
                        :hint="'If elements margins should be used for matching those which are aligned to the anchor'"
                ></switch-field>

                <variables-field 
                        :label="'Regexp'"
                        :hint="'Expected format of the searched text value. by default all the candidates in range are considered vaild neighbours'"
                        :value.sync="value.property.regexp"
                ></variables-field>

                <switch-field
                        :value.sync="value.property.trim"
                        :label="'Trim'"
                        :hint="'Automatically trim leading/trailing whitespace from the text elements'"
                ></switch-field>

                <switch-field
                        :value.sync="value.property.ignorecase"
                        :label="'Ignore case'"
                        :hint="'Do a case-insensitive search (affects the passed locator and regexp filtering)'"
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
    export default class FindTextPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Find the closest text elements near the set anchor(s) through locator."
            this.$emit("setDescription", description)
        }

    }
</script>