<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Name'"
                        :hint="'Name of worksheet'"
                        :value.sync="value.property.name"
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
    export default class FindEmptyRowPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Find the first empty row after existing content, and return the row number."
            this.$emit("setDescription", description)
        }
    }
</script>