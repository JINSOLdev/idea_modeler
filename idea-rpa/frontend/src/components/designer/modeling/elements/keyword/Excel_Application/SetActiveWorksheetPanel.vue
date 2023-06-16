<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Sheetname'"
                        :hint="'Name of Excel sheet, defaults to None'"
                        :value.sync="value.property.sheetname"
                ></variables-field>

                <variables-field
                        :label="'Sheetnumber'"
                        :hint="'Index of Excel sheet, defaults to None'"
                        :value.sync="value.property.sheetnumber"
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
    export default class SetActiveWorksheetPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Set active worksheet by either its sheet number or name"
            this.$emit("setDescription", description)
        }
    }
</script>