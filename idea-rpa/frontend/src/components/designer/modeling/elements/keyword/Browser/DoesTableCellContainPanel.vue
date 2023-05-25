<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
<!--locator-->
                    <variables-field 
                        :label="'Locator'"
                        :hint="'Locator for element'"
                        :value.sync="value.property.locator"
                    ></variables-field>  

                    <variables-field
                        :label="'Row'"
                        :hint="'Table row index'"
                        :value.sync="value.property.row"
                ></variables-field>

                <variables-field
                        :label="'Column'"
                        :hint="'Table column index'"
                        :value.sync="value.property.column"
                ></variables-field>

                <variables-field
                        :label="'Expected'"
                        :hint="'Expected value'"
                        :value.sync="value.property.expected"
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
    export default class DoesTableCellContainPanel extends Mixins(KeywordPanel) {
    }
</script>