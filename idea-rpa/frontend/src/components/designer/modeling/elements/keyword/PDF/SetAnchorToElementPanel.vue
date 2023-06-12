<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Locator'"
                        :hint="`Element to set anchor to. this can be prefixed with either 'text', 'subtext', 'regex', 'coords' to find the anchor by text or coordinates. The 'text' strategy is assumed`"
                        :value.sync="value.property.locator"
                        :required="true"
                ></variables-field>

                <switch-field
                        :value.sync="value.property.trim"
                        :label="'Trim'"
                        :hint="'Automatically trim leading/trailing whitespace from the text elements'"
                        persistent-hint
                        class="py-0"
                ></switch-field>

                <variables-field 
                        :label="'Pagenum'"
                        :hint="'Page number where search is performed on'"
                        :value.sync="value.property.pagenum"
                ></variables-field>

                <switch-field
                        :value.sync="value.property.ignore_case"
                        :label="'Ignore case'"
                        :hint="'Do a case-insensitive search (affects the passed locator and regexp filtering)'"
                        persistent-hint
                        class="py-0"
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
    export default class SetAnchorToElementPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Sets main anchor point in the document for further searches."
            this.$emit("setDescription", description)
        }

    }
</script>