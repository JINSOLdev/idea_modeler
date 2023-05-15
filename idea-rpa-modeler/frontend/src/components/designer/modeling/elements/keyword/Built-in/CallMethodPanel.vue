<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>
            
            <v-card-text>
                <variables-field
                        :label="'Obejct'"
                        :hint="'Object with method to call'"
                        :value.sync="value.property.object"
                ></variables-field>
                
                <variables-field
                        :label="'Method Name'"
                        :hint="'Name of method'"
                        :value.sync="value.property.methodName"
                ></variables-field>
                
                <variables-field
                        :label="'Args'"
                        :hint="'Positional arguments for method'"
                        :value.sync="value.property.args"
                        :isMultiple="true"
                ></variables-field>

                <keyword-args-field
                        :label="'Kwargs'"
                        :value.sync="value.property.kwargs"
                ></keyword-args-field>            
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
    export default class CallMethodPanel extends Mixins(KeywordPanel) {
    }
</script>