<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Range String'"
                        :hint="'Cell range or sing cell (e.g. E2:E10 or G2)'"
                        :value.sync="value.property.range_string"
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
    export default class ClearCellRangePanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Clear cell values for a given range."
            this.$emit("setDescription", description)
        }
    }
</script>