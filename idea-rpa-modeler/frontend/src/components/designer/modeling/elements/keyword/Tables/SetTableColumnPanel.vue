<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Table'"
                        :hint="'Table to modify'"
                        :value.sync="value.property.table"
                ></variables-field>
                <variables-field
                        :label="'Column'"
                        :hint="'Column to modify'"
                        :value.sync="value.property.column"
                ></variables-field>

                <variables-field
                        :label="'Values'"
                        :hint="'Values for column'"
                        :value.sync="value.property.values"
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
    export default class SetTableColumnPanel extends Mixins(KeywordPanel) {
    }
</script>