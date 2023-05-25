<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <locator-field
                        :value.sync="value.property.locator"
                        :hint="'Locator for window to control'"
                ></locator-field>
                
                <v-switch
                        v-model="value.property.secure"
                        label="Secure"
                        color="success"
                        hint="Bring window to foreground"
                        persistent-hint
                        class="py-0 mb-6"
                ></v-switch>
                
                <variables-field
                        :label="'Timeout'"
                        :hint="'Time to wait for locator match (in seconds)'"
                        :value.sync="value.property.timeout"
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
    export default class ContorlWindowPanel extends Mixins(KeywordPanel) {
        mounted(){
            var description = "Controls the window defined by the locator."
            this.$emit("setDescription", description)
        }
    }
</script>