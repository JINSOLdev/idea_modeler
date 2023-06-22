<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>
            <v-card-text>
                <locator-field 
                        :label="'Locator'"
                        :hint="'Locator for element'"
                        :value.sync="value.property.locator"
                        :required="true"
                ></locator-field>

                <variables-field
                        :label="'Attribute'"
                        :hint="'Name of attribute'"
                        :value.sync="value.property.attribute"
                        :required="true"
                ></variables-field>

                <variables-field
                        :label="'Expected'"
                        :hint="'Expected value'"
                        :value.sync="value.property.expected"
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
    export default class IsElementAttributeEqualToPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Is element attribute equal to expected value"
            this.$emit("setDescription", description)
        }
    }
</script>