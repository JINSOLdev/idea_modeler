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
                ></variables-field>
                <variables-field
                        :label="'Path'"
                        :hint="'Path to output CSV file'"
                        :value.sync="value.property.path"
                ></variables-field>

                <v-switch
                        v-model="value.property.header"
                        label="Header"
                        hint="Write column name as header"
                        persistent-hint
                        class="py-0 mb-6"
                ></v-switch>


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
    export default class WritetabletoCSVPanel extends Mixins(KeywordPanel) {
    }
</script>