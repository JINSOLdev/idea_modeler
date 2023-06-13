<!--
    TODO: 변수 할당 필요함. UI만 작업하였음
-->
<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>
            
            <v-card-text>
                <locator-field
                        :label="'Locator'"
                        :hint="'Locator for element'"
                        :value.sync="value.property.locator"
                ></locator-field>
            </v-card-text>

            <v-card-text>
                <variables-field 
                        :label="'Timeout'"
                        :hint="'Time to wait for locator match (in seconds)'"
                        :value.sync="value.property.timeout"
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
    export default class GetElementPanel extends Mixins(KeywordPanel) {
        mounted(){
            var description = "Get a Control Windows element defined by the locator."
            this.$emit("setDescription", description)
        }
    }
</script>