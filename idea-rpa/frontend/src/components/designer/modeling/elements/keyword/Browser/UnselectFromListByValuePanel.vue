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
                        :label="'Values'"
                        :hint="'Values to unselect'"
                        :value.sync="value.property.values"
                        :isMultiple="true"
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
    
    export default class UnselectFromListByValuePanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Unselects options from selection list locator by values."
            this.$emit("setDescription", description)
        }
    }
</script>