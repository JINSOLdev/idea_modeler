<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Row'"
                        :hint="'index of row'"
                        :value.sync=value.property.row
                        :required="true"
                ></variables-field>

                <variables-field
                        :label="'Column'"
                        :hint="'Name or index of column'"
                        :value.sync=value.property.column
                        :required="true"
                ></variables-field>

                <variables-field
                        :label="'Fmt'"
                        :hint="'Format code for cell'"
                        :value.sync=value.property.fmt
                        :required="true"
                ></variables-field>
                <variables-field
                        :label="'Name'"
                        :hint="'Name of worksheet'"
                        :value.sync=value.property.name
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
    export default class SetCellFormatPanel extends Mixins(KeywordPanel) {
    }
</script>