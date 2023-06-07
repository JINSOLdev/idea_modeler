<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Content'"
                        :hint="'Rows of values to append'"
                        :value.sync="value.property.content"
                        :required="true"
                ></variables-field>

                <variables-field
                        :label="'Name'"
                        :hint="'Name of worksheet'"
                        :value.sync="value.property.name"
                ></variables-field>

                <switch-field
                        :label="'Header'"
                        :hint="'Map to existing header row'"
                        :value.sync="value.property.header"
                ></switch-field>

                <variables-field
                        :label="'Start'"
                        :hint="'Start row index'"
                        :value.sync="value.property.start"
                ></variables-field>

                <switch-field
                        :value.sync="value.property.formatting_as_empty"
                        :label="'Formatting As Empty'"
                        :hint="'Consider rows containing only formatting as empty'"
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
    export default class AppendRowsToWorksheetPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Append values to the end of the worksheet."
            this.$emit("setDescription", description)
        }
    }
</script>