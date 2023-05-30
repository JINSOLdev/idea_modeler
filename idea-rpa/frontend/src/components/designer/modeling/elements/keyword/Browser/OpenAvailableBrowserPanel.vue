<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Url'"
                        :hint="'Open directly to the given URL'"
                        :value.sync="value.property.url"
                ></variables-field>
                
                <v-switch
                v-model="value.property.headless"
                label="Headless"
                hint="'Do not open a visible window'"
                persistent-hint
                class="py-0"
                ></v-switch>

                <v-switch
                v-model="value.property.maximized"
                label="Maximized"
                hint="'Maximize the browser window'"
                persistent-hint
                class="py-0"
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
    
    export default class OpenAvailableBrowserPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Attempts to open a browser on the user's device from a set of supported browsers. Automatically downloads a corresponding webdriver if none is already installed."
            this.$emit("setDescription", description)
        }
    }
</script>