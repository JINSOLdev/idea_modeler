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
                        :required="true"
                    ></locator-field> 

            </v-card-text>

        </v-card>
        <return-values-field
                :value.sync="value.property.value"
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
    export default class GetSelectedListValuePanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Returns the value of selected option from selection list locator."
            this.$emit("setDescription", description)
        }
    }
</script>