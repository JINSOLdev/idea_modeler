<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>
            
            <v-card-text>
                <v-text-field
                        :v-model.number="'numberValue'"
                        :label="'Expression'"
                        :hint="'Python expression to evaluate'"
                        :value.sync="value.property.expression"
                ></v-text-field>

                <variables-field
                        :label="'Expression'"
                        :hint="'Python expression to evaluate'"
                        :value.sync="value.property.expression"
                ></variables-field>


                <variables-field
                        :label="'Modules'"
                        :hint="'Comma separated list of Python modules to import'"
                        :value.sync="value.property.modules"
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
    export default class EvaluatePanel extends Mixins(KeywordPanel) {
    }
</script>