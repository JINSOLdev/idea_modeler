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
                        :required="true"
                ></variables-field>
                
                <variables-field
                        :label="'Names'"
                        :hint="'New column names'"
                        :value.sync="value.property.table"
                        :required="true"
                ></variables-field>

                <switch-field
                        :label="'Strict'"
                        :hint="`Raise error if column lengths don't match`"
                        :value.sync="value.property.table"
                ></switch-field>
            </v-card-text>
        </v-card>
    </div>
</template>

<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordPanel from '../../panels/KeywordPanel.vue'
import { match } from "assert";

    @Component({
        components: {
            KeywordPanel,
        }
    })
    export default class RenameTableColumnsPanel extends Mixins(KeywordPanel) {
    }
</script>