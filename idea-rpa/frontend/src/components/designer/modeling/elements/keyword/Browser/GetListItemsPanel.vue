<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>

                    <!--locator-->
                    <variables-field 
                        :label="'Locator'"
                        :hint="'Locator for element'"
                        :value.sync="value.property.locator"
                    ></variables-field> 
                    
                    <v-switch
                        v-model="value.property.values"
                        label="Values"
                        hint="Return values instead of labels"
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
    export default class GetListItemsPanel extends Mixins(KeywordPanel) {
    }
</script>