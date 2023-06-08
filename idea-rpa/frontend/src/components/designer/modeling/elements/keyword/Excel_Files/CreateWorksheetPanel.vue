<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field 
                        :label="'Name'"
                        :hint="'Name of new worksheet'"
                        :value.sync="value.property.name"
                        :required="true"
                ></variables-field>

                <variables-field
                        :label="'Content'"
                        :hint="'Content for new worksheet'"
                        :value.sync="value.property.content"
                ></variables-field>

                <switch-field
                        :value.sync="value.property.exist_ok"
                        :label="'Exist Ok'"
                        :hint="'Raise an error if name exists'"
                ></switch-field>
    
                <switch-field
                        :label="'Header'"
                        :hint="'Use first row as header'"
                        :value.sync="value.property.header"
                ></switch-field>
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
    export default class CreateWorksheetPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Create a new worksheet in the current workbook."
            this.$emit("setDescription", description)
        }
    }
</script>