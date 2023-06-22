<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Username'"
                        :hint="'The email address you are going to send the email with'"
                        :value.sync="value.property.username"
                        :required="true"
                ></variables-field>
                
                <variables-field
                        :label="'Access Token'"
                        :hint="'Access token string found in the dictionary obtained with get Oauth Token or Refresh Oauth Token. i.e. ${token}[access_token]'"
                        :value.sync="value.property.access_token"
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
    
    export default class GenerateOauthStringPanel extends Mixins(KeywordPanel) {
    }
</script>