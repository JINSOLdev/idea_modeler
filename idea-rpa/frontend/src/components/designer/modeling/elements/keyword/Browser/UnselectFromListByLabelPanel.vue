<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <Locator-field
                        :label="'Locator'"
                        :hint="'Locator for element'"
                        :value.sync="value.property.locator"
                        :required="true"
                ></Locator-field>
            </v-card-text>

            <v-card-text>
                <Variables-field
                        :label="'Labels'"
                        :hint="'Labels to unselect'"
                        :value.sync="value.property.labels"
                        :isMultiple="true"
                ></Variables-field>
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
    
    export default class UnselectFromListByLabelPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Unselects options from selection list locator by labels."
            this.$emit("setDescription", description)
        }
    }
</script>