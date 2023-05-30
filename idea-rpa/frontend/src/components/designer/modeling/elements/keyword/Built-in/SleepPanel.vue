<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>
            
            <v-card-text>
                <variables-field
                        :label="'Time'"
                        :hint="'A number or time string, e.g. `1 day 2hours` or `3s`'"
                        :value.sync="value.property.time"
                ></variables-field>    
            </v-card-text>           
            
            <v-card-text>
                <variables-field
                        :label="'Reason'"
                        :hint="'Optional reason for sleeping'"
                        :value.sync="value.property.reason"
                ></variables-field>
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
    export default class SleepPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Pauses the test executed for the given time."
            this.$emit("setDescription", description)
        }
    }
</script>