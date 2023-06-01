<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field 
                        :label="'Sheet name'"
                        :hint="'Name for sheet'"
                        :value.sync="value.property.sheet_name"
                        :required="true"
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
    export default class AddNewSheetPanel extends Mixins(KeywordPanel) {
        mounted(){
            var description = "Add new worksheet to workbook. Workbook is created by default if it does not exist."
            this.$emit("setDescription", description)
        }
    }
</script>