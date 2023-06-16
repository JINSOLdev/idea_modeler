<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Start'"
                        :hint="'Row number to start deletion from'"
                        :value.sync="value.property.start"
                        :required="true"
                ></variables-field>

                <variables-field
                        :label="'End'"
                        :hint="'Optional row number for last column to delete'"
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
    export default class DeleteRowsPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Delete row or rows beginning from start row number to possible end row number."
            this.$emit("setDescription", description)
        }
    }
</script>