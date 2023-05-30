<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>
            <v-card-text>       
                <variables-field 
                        :label="'Action'"
                        :hint="'How to handle alert, i.e. ACCEPT,DISMISS, or LEAVE'"
                        :value.sync="value.property.action"
                    ></variables-field> 

                    <variables-field 
                        :label="'Timeout'"
                        :hint="'Time to wait, e.g. 5 seconds or 1 min'"
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
    export default class HandleAlertPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Handles the current alert and returns its message."
            this.$emit("setDescription", description)
        }
    }
</script>