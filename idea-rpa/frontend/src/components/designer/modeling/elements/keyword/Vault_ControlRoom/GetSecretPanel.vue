<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Secret Name'"
                        :hint="'Read a secret from the configured source, e.g. Robocorp Vault, and return it as a Secret object.'"
                        :value.sync="value.property.secret_name"
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
    export default class GetSecretPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Read a secret from the configured source, e.g. Robocorp Vault, and return it as a Secret object."
            this.$emit("setDescription", description)
        }
    }
</script>