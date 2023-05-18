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
            </v-card-text>
            
            <v-card-text>
                <variables-field
                        :label="'Headless'"
                        :hint="'Do not open a visible window'"
                        :value.sync="value.property.headless"
                ></variables-field>
            </v-card-text>
            
            <v-card-text>
                <variables-field
                        :label="'Maximized'"
                        :hint="'Maximize the browser window'"
                        :value.sync="value.property.maximized"
                ></variables-field>
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
    }
</script>