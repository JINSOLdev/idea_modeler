<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <path-field
                        :label="'Source Path'"
                        :hint="'Path to the source PDF'"
                        :value.sync="value.property.source_path"
                        :required="true"
                ></path-field>

                <path-field
                        :label="'Output Path'"
                        :hint="'Path to decrypted PDF'"
                        :value.sync="value.property.output_path"
                        :required="true"
                ></path-field>

                <variables-field 
                        :label="'Password'"
                        :hint="'password for decryption'"
                        :value.sync="value.property.password"
                        :required="true"
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
        mounted() {
            var description = "Decrypt PDF with password."
            this.$emit("setDescription", description)
        }
    }
</script>