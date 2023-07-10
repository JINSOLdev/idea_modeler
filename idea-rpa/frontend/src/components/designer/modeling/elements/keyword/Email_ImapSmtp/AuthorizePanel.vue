<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Account'"
                        :hint="'User account as string'"
                        :value.sync="value.property.account"
                ></variables-field>
                
                <variables-field
                        :label="'Password'"
                        :hint="'User passwod as string'"
                        :value.sync="value.property.password"
                ></variables-field>
                
                <variables-field
                        :label="'Smtp Server'"
                        :hint="'SMTP sercer address'"
                        :value.sync="value.property.smtp_server"
                ></variables-field>

                <variables-field
                        :label="'Imap Server'"
                        :hint="'IMAP sercer address'"
                        :value.sync="value.property.imap_server"
                ></variables-field>

                <variables-field
                        :label="'Smtp Port'"
                        :hint="'SMTP server port, defaults to 587'"
                        :value.sync="value.property.smtp_port"
                ></variables-field>

                <variables-field
                        :label="'Imap Port'"
                        :hint="'IMAP server port, defaults to 993'"
                        :value.sync="value.property.imap_port"
                ></variables-field>

                <switch-field
                        :label="'Is Oauth'"
                        :hint="'use XOAUTH2 protocol with a base64 encoded OAuth2 string as password'"
                        :value.sync="value.property.is_oauth"
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
    
    export default class AuthorizePanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Authorize user to SMTP and IMAP servers."
            this.$emit("setDescription", description)
        }
    }
</script>