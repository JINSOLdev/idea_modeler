<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <path-field
                        :label="'Source Path'"
                        :hint="'Path to source PDF'"
                        :value.sync="value.property.sourcepath"
                ></path-field>
                <path-field
                        :label="'Output Path'"
                        :hint="'Path to the decrypted PDf'"
                        :value.sync="value.property.outputpath"
                ></path-field>
                <variables-field
                        :label="'User Pwd'"
                        :hint="'Allows opening and reading PDF with restrictions'"
                        :value.sync="value.property.userpwd"
                ></variables-field>

                <variables-field
                        :label="'Owner Pwd'"
                        :hint="'Allows opening PDF without any restrictions, by default same as user_pwd'"
                        :value.sync="value.property.ownerpwd"
                ></variables-field>
                <v-switch
                        v-model="value.property.use128bit"
                        label="Use 128bit"
                        hint="Whether to use 128bit encryption, when false 40bit encryption is used"
                        persistent-hint
                        class="py-0"
                ></v-switch>
                

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
    export default class EncryptPdfPanel extends Mixins(KeywordPanel) {
    }
</script>