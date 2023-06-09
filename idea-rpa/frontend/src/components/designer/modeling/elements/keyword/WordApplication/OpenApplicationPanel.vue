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
                        hint="show window after opening"
                        persistent-hint
                        class="py-0 mb-6"
                ></v-switch>
                <v-switch
                        v-model="value.property.display_alerts"
                        label="Display alerts"
                        hint="show alert popups"
                        persistent-hint
                        class="py-0 mb-6"
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
    export default class OpenApplicationPanel extends Mixins(KeywordPanel) {
    }
</script>