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
                ></locator-field> 
                    
                <switch-field
                        :label="'Values'"
                        :hint="'Return values instead of labels'"
                        :value.sync="value.property.values"
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
    export default class GetListItemsPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Returns all labels or values of selection list locator."
            this.$emit("setDescription", description)
        }
    }
</script>