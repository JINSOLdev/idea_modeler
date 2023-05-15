<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Path'"
                        :hint="'Path to CSV file'"
                        :value.sync="value.property.path"
                ></variables-field>

                <v-switch
                        v-model="value.property.as_list"
                        label="Header"
                        hint="File includes header"
                        persistent-hint
                        class="py-0 mb-6"
                ></v-switch>

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
    export default class ReadtablefromCSVPanel extends Mixins(KeywordPanel) {
    }
</script>