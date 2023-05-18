<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>
            
            <v-card-text>
                <variables-field
                        :label="'Retry'"
                        :hint="'Time to wait, e.g.`1 minute` or `5 seconds`, or attempts, `5times`'"
                        :value.sync="value.property.retry"
                ></variables-field>
            </v-card-text>           
                
            <v-card-text>
                <variables-field
                        :label="'Retry Interval'"
                        :hint="'Time between attempts, e.g. `3 seconds`'"
                        :value.sync="value.property.retry_interval"
                ></variables-field>
            </v-card-text>

            <v-card-text>
                <variables-field
                        :label="'Name'"
                        :hint="'Name of keyword to run'"
                        :value.sync="value.property.name"
                ></variables-field>
            </v-card-text>

            <v-card-text>
                <variables-field
                        :label="'Args'"
                        :hint="'Arguments for keyword'"
                        :value.sync="value.property.args"
                        :isMultiple="true"
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
    export default class WaitUntilKeywordsSucceedsPanel extends Mixins(KeywordPanel) {
    }
</script>