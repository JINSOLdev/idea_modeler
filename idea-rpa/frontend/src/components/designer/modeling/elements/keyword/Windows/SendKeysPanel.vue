<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <Locator-field
                        :label="'Locator'"
                        :hint="'Locator'"
                        :value.sync="value.property.locator"
                ></Locator-field>
            </v-card-text>

            <v-card-text>
                <variables-field 
                        :label="'Keys'"
                        :hint="'Keys to send'"
                        :value.sync="value.property.keys"
                ></variables-field> 
            </v-card-text>

            <v-card-text>
                <variables-field 
                        :label="'Interval'"
                        :hint="'Time to wait between keys (in seconds)'"
                        :value.sync="value.property.interval"
                ></variables-field> 
            </v-card-text>

            <v-card-text>
                    <v-switch
                        v-model="value.property.send_enter"
                        label="Send Enter"
                        hint="Send Enter key after given keys"
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
    export default class SendKeysPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Send keys to desktop, current window or to Control element defined by given locator."
            this.$emit("setDescription", description)
        }
    }
</script>