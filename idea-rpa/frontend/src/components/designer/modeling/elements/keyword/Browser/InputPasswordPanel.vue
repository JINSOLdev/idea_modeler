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

                <variables-field 
                        :label="'Password'"
                        :hint="'Password value'"
                        :value.sync="value.property.password"
                        :required="true"
                ></variables-field> 

                <switch-field
                        :label="'Clear'"
                        :hint="'Clear input before text is typed'"
                        :value.sync="value.property.clear"
                ></switch-field>
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
    export default class InputPasswordPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Types the given password into the text field identified by locator."
            this.$emit("setDescription", description)
        }
    }
</script>