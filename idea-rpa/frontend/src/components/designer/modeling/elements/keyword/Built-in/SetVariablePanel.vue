<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>
            
            <v-card-text>
                <variables-field
                        :label="'Values'"
                        :hint="'Values to assign'"
                        :value.sync="value.property.values"
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
    export default class SetVariablePanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Returns the given values which can then be assigned to a variables."
            this.$emit("setDescription", description)
        }
    }
</script>