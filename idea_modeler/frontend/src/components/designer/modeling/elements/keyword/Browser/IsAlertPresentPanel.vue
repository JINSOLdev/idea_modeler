<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>
            <v-card-text>  
                    
                <variables-field 
                        :label="'Text'"
                        :hint="'Text to search for'"
                        :value.sync="value.property.text"
                    ></variables-field> 

                <variables-field 
                        :label="'Action'"
                        :hint="'How to handle alert, i.e. ACCEPT,DISMISS, or LEAVE'"
                        :value.sync="value.property.action"
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
    export default class IsAlertPresentPanel extends Mixins(KeywordPanel) {
    }
</script>