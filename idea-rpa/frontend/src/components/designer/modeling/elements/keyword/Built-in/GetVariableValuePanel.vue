<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>
            
            <v-card-text>
                <variables-field
                        :label="'Name'"
                        :hint="'Name of variable'"
                        :value.sync="value.property.name"
                ></variables-field>

                <variables-field
                        :label="'Default'"
                        :hint="'Default value if variable is undefined'"
                        :value.sync="value.property.default"
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
    export default class GetVariableValuePanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Returns variable value or default if the variable does not exist."
            this.$emit("setDescription", description)
        }
    }
</script>