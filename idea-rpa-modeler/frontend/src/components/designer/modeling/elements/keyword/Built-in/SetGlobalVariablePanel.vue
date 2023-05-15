<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>
            
            <v-card-text>
                <variables-field
                        :label="'Name'"
                        :hint="'Name of the variable'"
                        :value.sync="value.property.name"
                ></variables-field> 
                
                <variables-field
                        :label="'Values'"
                        :hint="'Values to assign'"
                        :value.sync="value.property.values"
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
    export default class SetGlobalVariablePanel extends Mixins(KeywordPanel) {
    }
</script>