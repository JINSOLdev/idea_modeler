<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                

                <v-switch
                        v-model="value.property.visible"
                        label="Visible"
                        hint="Show window after opening"
                        persistent-hint
                        class="py-0 mb-6"
                ></v-switch>

                <v-switch
                        v-model="value.property.display_alerts"
                        label="Display alerts"
                        hint="Show alert popups"
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
    export default class OpenApplicationPanel extends Mixins(KeywordPanel) {
    }
</script>