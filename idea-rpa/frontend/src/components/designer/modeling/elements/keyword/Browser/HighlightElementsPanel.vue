<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>
            <v-card-text>     
                <!--locator-->
                <locator-field 
                        :label="'Locator'"
                        :hint="'Locator for element'"
                        :value.sync="value.property.locator"
                        :required="true"
                    ></locator-field> 

                <variables-field 
                        :label="'Width'"
                        :hint="'Border width, e.g. 2px'"
                        :value.sync="value.property.width"
                    ></variables-field> 

                    <variables-field 
                        :label="'Stlye'"
                        :hint="'Border style, e.g.dotted, dashed, or solid'"
                        :value.sync="value.property.style"
                    ></variables-field> 

                    <variables-field 
                        :label="'Color'"
                        :hint="'Border color, e.g. blue or #50C878'"
                        :value.sync="value.property.color"
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
    export default class HighlightElementsPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Highlight all matching elements by locator."
            this.$emit("setDescription", description)
        }
    }
</script>