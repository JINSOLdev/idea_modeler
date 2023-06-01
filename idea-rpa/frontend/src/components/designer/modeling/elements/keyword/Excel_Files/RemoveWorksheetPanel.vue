<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>                
                <variables-field
                        :label="'Name'"
                        :hint="'Name of worksheet to remove'"
                        :value.sync="value.property.name"
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
    export default class RemoveWorksheetPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Remove a worksheet from the active workbook."
            this.$emit("setDescription", description)
        }
    }
</script>