<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>
            <v-card-text>                      
<!--locator-->
                    <locator-field 
                        :label="'Locator'"
                        :hint="'Locator for element'"
                        :value.sync="value.property.locator"
                    ></locator-field>

                    <v-switch
                        v-model="value.property.missing_ok"
                        label="Missing Ok"
                        hint="Allow element to not exist"
                        persistent-hint
                        class="py-0 mb-6"
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
    export default class IsElementEnabledPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Is element enabled"
            this.$emit("setDescription", description)
        }
    }
</script>