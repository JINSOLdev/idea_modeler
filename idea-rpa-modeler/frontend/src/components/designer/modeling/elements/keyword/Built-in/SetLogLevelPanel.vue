<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>
            
            <v-card-text>
                <variables-field
                        :label="'Level'"
                        :hint="'Log threshold, e.g. `TRACE`, `INFO`, or `NONE`'"
                        :value.sync="value.property.level"
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
    export default class SetLogLevelPanel extends Mixins(KeywordPanel) {
    }
</script>