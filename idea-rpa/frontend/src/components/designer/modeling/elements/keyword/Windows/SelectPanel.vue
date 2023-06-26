<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <locator-field
                        :isWindows="true"
                        :label="'Locator'"
                        :hint="'Locator for element to control'"
                        :value.sync="value.property.locator"
                        :required="true"
                ></locator-field>

                <variables-field 
                        :label="'Value'"
                        :hint="'Value to select'"
                        :value.sync="value.property.value"
                        :required="true"
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
    export default class SelectPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Select value on Control element if action is supported."
            this.$emit("setDescription", description)
        }
    }
</script>