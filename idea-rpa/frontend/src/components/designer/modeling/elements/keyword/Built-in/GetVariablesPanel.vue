<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>
            
            <v-card-text>
                <switch-field
                        :label="'No Decoration'"
                        :hint="'Hide Robot Framework variable syntax'"
                        :value.sync="value.property.noDecoration"
                ></switch-field>
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
    export default class GetVariablesPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Returns variable value or default if the variable does not exist."
            this.$emit("setDescription", description)
        }
    }
</script>