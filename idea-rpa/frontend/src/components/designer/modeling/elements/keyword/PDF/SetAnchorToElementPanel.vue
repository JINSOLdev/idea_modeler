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
                <v-switch
                        v-model="value.property.trim"
                        label="Trim"
                        hint="Automatically trim leading/trailing whitespace from the text elements"
                        persistent-hint
                        class="py-0"
                ></v-switch>

                <variables-field 
                        :label="'Pagenum'"
                        :hint="'Page number where search is performed on'"
                        :value.sync="value.property.pagenum"
                    ></variables-field>

                    <v-switch
                        v-model="value.property.ignorecase"
                        label="Ignore case"
                        hint="Do a case-insensitive search (affects the passed locator and regexp filtering)"
                        persistent-hint
                        class="py-0"
                ></v-switch>

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
    export default class SetAnchorToElementPanel extends Mixins(KeywordPanel) {
    }
</script>