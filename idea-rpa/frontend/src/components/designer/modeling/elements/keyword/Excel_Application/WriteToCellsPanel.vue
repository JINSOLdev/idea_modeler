<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Worksheet'"
                        :hint="'Worksheet to handle, defaults to active worksheet if None'"
                        :value.sync="value.property.worksheet"
                ></variables-field>
                
                <variables-field
                        :label="'Row'"
                        :hint="'Target row, defaults to none'"
                        :value.sync="value.property.row"
                ></variables-field>
                
                <variables-field
                        :label="'Column'"
                        :hint="'Target column, defaults to none'"
                        :value.sync="value.property.column"
                ></variables-field>

                <variables-field
                        :label="'Value'"
                        :hint="'Possible value to set, defaults to None'"
                        :value.sync="value.property.value"
                ></variables-field>

                <variables-field
                        :label="'Number format'"
                        :hint="'Possible number format to set, defaults to None'"
                        :value.sync="value.property.number_format"
                ></variables-field>

                <variables-field
                        :label="'Formula'"
                        :hint="'Possible format to set, defaults to None'"
                        :value.sync="value.property.formula"
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
    export default class WriteToCellsPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Write value, number_format and/or formula into cell."
            this.$emit("setDescription", description)
        }
    }
</script>