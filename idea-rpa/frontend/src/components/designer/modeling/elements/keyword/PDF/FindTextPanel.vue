<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Locator'"
                        :hint="'Element to set anchor to. this can be prefixed with either "text", "subtext", "regex", "coords" to find the anchor by text or coordinates. the "text" strategy is assumed'"
                        :value.sync="value.property.locator"
                ></variables-field>
                <variables-field 
                        :label="'Pagenum'"
                        :hint="'Page number where search is performed on'"
                        :value.sync="value.property.pagenum"
                    ></variables-field>
                    <variables-field 
                        :label="'Direction'"
                        :hint="'in which direction to search for text elements. this can be any of "top" or "up" "bottom or down", "left or right" '"
                        :value.sync="value.property.direction"
                    ></variables-field>
                    <variables-field 
                        :label="'Closest Neighbours'"
                        :hint="'how many neighbours to return at most, sorted by the distance from the current anchor'"
                        :value.sync="value.property.closestneighbours"
                    ></variables-field>

                <v-switch
                        v-model="value.property.strict"
                        label="Strict"
                        hint="If elements margins should be used for matching those which are aligned to the anchor"
                        persistent-hint
                        class="py-0"
                ></v-switch>
                <variables-field 
                        :label="'Regexp'"
                        :hint="'Expected format of the searched text value. by default all the candidates in range are considered vaild neighbours'"
                        :value.sync="value.property.regexp"
                    ></variables-field>
                    <v-switch
                        v-model="value.property.trim"
                        label="Trim"
                        hint="Automatically trim leading/trailing whitespace frome the text elements"
                        persistent-hint
                        class="py-0"
                ></v-switch>
                <v-switch
                        v-model="value.property.ignorecase"
                        label="Ignore case"
                        hint="Do a case-insensitive search (affects the passed locator and regexp filtering)"
                        persistent-hint
                        class="py-0"
                ></v-switch>


            </v-card-text>
        </v-card>
        <return-values-field
                :value.sync="value.property.matches"
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
    }
</script>