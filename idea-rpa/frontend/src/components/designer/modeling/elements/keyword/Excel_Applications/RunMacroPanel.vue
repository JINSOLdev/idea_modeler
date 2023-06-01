<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field 
                        :label="'Macro name'"
                        :hint="'Macro to run'"
                        :value.sync="value.property.macro_name"
                        :required="true"
                ></variables-field> 
            </v-card-text>

            <v-card-text>
                <variables-field 
                        :label="'args'"
                        :hint="'arguments to pass to macro'"
                        :value.sync="value.property.args"
                        :isMultiple="true"
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
    export default class RunMacroPanel extends Mixins(KeywordPanel) {
        mounted(){
            var description = "Run Excel macro with given name."
            this.$emit("setDescription", description)
        }
    }
</script>