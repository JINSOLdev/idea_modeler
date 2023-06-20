<template>
    <div>
         <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>
            
            <v-card-text>
                <locator-field 
                        :label="'Locator'"
                        :hint="'Locator for element'"
                        :value.sync="value.property.locator"
                        :required="true"
                ></locator-field> 
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
    export default class MouseUpPanelPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Simulates releasing the left mouse button on the element locator."
            this.$emit("setDescription", description)
        }
    }
</script>