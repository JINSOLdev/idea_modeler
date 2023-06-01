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
            </v-card-text>

            <v-card-text>
                <variables-field
                        :label="'Content'"
                        :hint="'Content for new worksheet'"
                        :value.sync="value.property.content"
                ></variables-field>
            </v-card-text>

            <v-card-text>
                    <v-switch
                        v-model="value.property.exist_ok"
                        label="Exist Ok"
                        hint="Raise an error if name exists"
                        persistent-hint
                        class="py-0 mb-6"
                ></v-switch>
            </v-card-text>

            <v-card-text>
                    <v-switch
                        v-model="value.property.header"
                        label="Header"
                        hint="Write headers to worksheet"
                        persistent-hint
                        class="py-0 mb-6"
                ></v-switch>
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