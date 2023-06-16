<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <switch-field
                        :label="'Visible'"
                        :hint="'show window after opening'"
                        :value.sync ="value.property.visible"
                ></switch-field>
                
                <v-switch
                        :value.sync="value.property.display_alerts"
                        :label="'Display alerts'"
                        :hint="'show alert popups'"
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
        mounted() {
            var description = "Open the Word application."
            this.$emit("setDescription", description)
        }
    }
</script>