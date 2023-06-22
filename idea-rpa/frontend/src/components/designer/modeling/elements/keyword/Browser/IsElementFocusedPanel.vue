<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <locator-field 
                        :hint="'Locator for element'"
                        :value.sync="value.property.locator"
                        :required="true"
                ></locator-field>

                <switch-field
                        :label="'Missing Ok'"
                        :hint="'Allow element to not exist'"
                        :value.sync="value.property.missing_ok"
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
    export default class IsElementFocusedPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Is element focused"
            this.$emit("setDescription", description)
        }
    }
</script>