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

                <switch-field
                        :label="'Header'"
                        :hint="'Use first row as header'"
                        :value.sync="value.property.header"
                ></switch-field>

                <switch-field
                        :value.sync="value.property.trim"
                        :label="'Trim'"
                        :hint="'Remove empty rows from end'"
                ></switch-field>
                
                <variables-field
                        :label="'Start'"
                        :hint="'Start row index'"
                        :value.sync="value.property.start"
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
    export default class ReadWorksheetAsTablePanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Read the contents of a worksheet into a Table container. Allows sorting/filtering/manipulating using the RPA.Tables library."
            this.$emit("setDescription", description)
        }
    }
</script>