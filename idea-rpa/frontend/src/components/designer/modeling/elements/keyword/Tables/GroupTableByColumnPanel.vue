<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Table'"
                        :hint="'Table to read'"
                        :value.sync="value.property.table"
                        :required="true"
                ></variables-field>

                <variables-field
                        :label="'Column'"
                        :hint="'Column used for grouping'"
                        :value.sync="value.property.column"
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
    export default class GroupTableByColumnPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Group a table by column and return a list of grouped Tables."
            this.$emit("setDescription", description)
        }
    }
</script>