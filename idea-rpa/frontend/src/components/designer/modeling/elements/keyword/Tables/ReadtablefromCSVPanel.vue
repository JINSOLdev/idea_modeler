<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <Path-field
                        :label="'Path'"
                        :hint="'Path to CSV file'"
                        :value.sync="value.property.path"
                        :required="true"
                ></Path-field>

                <Variables-field
                        :label="'Header'"
                        :hint="'File includes header'"
                        :value.sync="value.property.header"
                ></Variables-field>

                <variables-field
                        :label="'Columns'"
                        :hint="'Names of columns in output'"
                        :value.sync="value.property.columns"
                ></variables-field>

                <variables-field
                        :label="'Dialect'"
                        :hint="'Format of CSV file'"
                        :value.sync="value.property.dialect"
                ></variables-field>

                <variables-field
                        :label="'Delimiters'"
                        :hint="'Valid delimiters'"
                        :value.sync="value.property.delimiters"
                ></variables-field>

                <variables-field
                        :label="'Encoding'"
                        :hint="'Source file encoding'"
                        :value.sync="value.property.encoding"
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
    export default class ReadtablefromCSVPanel extends Mixins(KeywordPanel) {
    }
</script>