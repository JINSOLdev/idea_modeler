<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Start'"
                        :hint="'Column or name to start deletion from'"
                        :value.sync="value.property.start"
                        :required="true"
                ></variables-field>
            </v-card-text>

            <v-card-text>
                <variables-field
                        :label="'End'"
                        :hint="'Optional column number or name for last column to delete'"
                        :value.sync="value.property.end"
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
    export default class DeleteColumnsPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Delete column or columns beginning from start column number/name to possible end column number/name."
            this.$emit("setDescription", description)
        }
    }
</script>