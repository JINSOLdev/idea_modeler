<!--
    TODO: 변수 할당 필요함. UI만 작업하였음
-->
<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>
            
            <v-card-text>
                <Locator-field
                        :label="'Locator'"
                        :hint="'Locator for elements'"
                        :value.sync="value.property.locator"
                ></Locator-field>
            </v-card-text>

            <v-card-text>
                <Locator-field
                        :label="'Root Element'"
                        :hint="'Locator will be used as search root element object if provided'"
                        :value.sync="value.property.locator"
                ></Locator-field>
            </v-card-text>

            <v-card-text>
                <variables-field 
                        :label="'Timeout'"
                        :hint="'Time to wait for locator match (in seconds)'"
                        :value.sync="value.property.text"
                ></variables-field> 
            </v-card-text>

            <v-card-text>
                    <v-switch
                        v-model="value.property.clear"
                        label="Siblings Only"
                        hint="Filter for elements on the same level as the initially found one"
                        persistent-hint
                        class="py-0 mb-6"
                ></v-switch>
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