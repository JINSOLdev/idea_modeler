<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <locator-field
                        :hint="'Locator'"
                        :value.sync="value.property.locator"
                ></locator-field>
                
                <variables-field 
                        :label="'Keys'"
                        :hint="'Keys to send'"
                        :value.sync="value.property.keys"
                ></variables-field> 
                
                <variables-field 
                        :label="'Interval'"
                        :hint="'Time to wait between keys (in seconds)'"
                        :value.sync="value.property.interval"
                ></variables-field> 
                
                <switch-field
                        :value.sync="value.property.send_enter"
                        :label="'Send Enter'"
                        :hint="'Send Enter key after given keys'"
                ></switch-field>
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