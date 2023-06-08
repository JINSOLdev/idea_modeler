<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <path-field
                        :label="'Output Path'"
                        :hint="'Path to the decrypted PDf'"
                        :value.sync="value.property.outputpath"
                ></path-field>
                <path-field
                        :label="'Source Path'"
                        :hint="'Path to source PDF'"
                        :value.sync="value.property.sourcepath"
                ></path-field>
                <variables-field 
                        :label="'Password'"
                        :hint="'password for decryption'"
                        :value.sync="value.property.password"
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
    export default class DecryptPdfPanel extends Mixins(KeywordPanel) {
    }
</script>