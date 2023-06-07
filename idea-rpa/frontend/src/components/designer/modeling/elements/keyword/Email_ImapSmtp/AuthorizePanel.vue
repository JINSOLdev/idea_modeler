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
                        :value.sync="value.property.smtpServer"
                ></variables-field>

                <variables-field
                        :label="'Imap Server'"
                        :hint="'IMAP sercer address'"
                        :value.sync="value.property.imapServer"
                ></variables-field>

                <variables-field
                        :label="'Smtp Port'"
                        :hint="'SMTP server port, defaults to 587'"
                        :value.sync="value.property.smtpPort"
                ></variables-field>

                <variables-field
                        :label="'Imap Port'"
                        :hint="'IMAP server port, defaults to 993'"
                        :value.sync="value.property.imapPort"
                ></variables-field>

                <switch-field
                        :label="'is Oauth'"
                        :hint="'use XOAUTH2 protocol with a base64 encoded OAuth2 string as password'"
                        :value.sync="value.property.isOauth"
                ></switch-field>
            </v-card-text>
            
            <return-values-field
                    :value.sync="value.property.token"
            ></return-values-field>
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
    
    export default class AuthorizePanel extends Mixins(KeywordPanel) {
    }
</script>