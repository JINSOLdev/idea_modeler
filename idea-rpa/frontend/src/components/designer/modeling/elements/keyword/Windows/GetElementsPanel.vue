<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>
            
            <v-card-text>
                <locator-field
                        :label="'Locator'"
                        :hint="'Locator for elements'"
                        :value.sync="value.property.locator"
                ></locator-field>
                
                <locator-field
                        :label="'Root Element'"
                        :hint="'Locator will be used as search root element object if provided'"
                        :value.sync="value.property.root_element"
                ></locator-field>
                
                <variables-field 
                        :label="'Timeout'"
                        :hint="'Time to wait for locator match (in seconds)'"
                        :value.sync="value.property.timeout"
                ></variables-field>

                <switch-field
                        :value.sync="value.property.sibling_only"  
                        :label="'Siblings Only'"
                        :hint="'Filter for elements on the same level as the initially found one'"
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
    export default class GetElementsPanel extends Mixins(KeywordPanel) {
        mounted(){
            var description = "Get a list of elements matching the locator."
            this.$emit("setDescription", description)
        }
    }
</script>