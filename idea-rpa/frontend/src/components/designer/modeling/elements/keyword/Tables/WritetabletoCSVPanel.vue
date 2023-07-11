<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Table'"
                        :hint="'Table to write'"
                        :value.sync="value.property.table"
                        :required="true"
                ></variables-field>
                
                <path-field
                        :label="'Path'"
                        :hint="'Path to output CSV file'"
                        :value.sync="value.property.path"
                        :required="true"
                ></path-field>

                <switch-field
                        :label="'Header'"
                        :hint="'Write column names as header'"
                        :value.sync="value.property.header"
                ></switch-field>
                
                <variables-field
                        :label="'Dialect'"
                        :hint="'Format of output CSV file'"
                        :value.sync="value.property.dialect"
                ></variables-field>
                
                <variables-field
                        :label="'Encoding'"
                        :hint="'Output file encoding'"
                        :value.sync="value.property.encoding"
                ></variables-field>
                
                <variables-field
                        :label="'Delimiter'"
                        :hint="'Delimiter between columns'"
                        :value.sync="value.property.delimiter"
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
    export default class WriteTableToCSVPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Write a table as a CSV file."
            this.$emit("setDescription", description)
        }
    }
</script>