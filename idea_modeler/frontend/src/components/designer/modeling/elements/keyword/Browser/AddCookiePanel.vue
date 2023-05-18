<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Name'"
                        :hint="'Name of cookie'"
                        :value.sync="value.property.name"
                ></variables-field>
                
                <variables-field
                        :label="'Value'"
                        :hint="'Value for cookie'"
                        :value.sync="value.property.value"
                ></variables-field>
                
                <variables-field
                        :label="'Path'"
                        :hint="'URL Path restriction'"
                        :value.sync="value.property.path"
                ></variables-field>
                
                <variables-field
                        :label="'Domain'"
                        :hint="'Domain restriction'"
                        :value.sync="value.property.domain"
                ></variables-field>
                
                <variables-field
                        :label="'Secure'"
                        :hint="'Only send over HTTPS'"
                        :value.sync="value.property.secure"
                ></variables-field>

                <variables-field
                        :label="'Expiry'"
                        :hint="'Expiration timestamp'"
                        :value.sync="value.property.expiry"
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
    
    export default class AddCookiePanel extends Mixins(KeywordPanel) {
    }
</script>