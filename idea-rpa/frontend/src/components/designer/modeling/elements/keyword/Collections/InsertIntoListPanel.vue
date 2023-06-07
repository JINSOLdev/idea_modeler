<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>
            
            <v-card-text>
                <variables-field
                        :label="'List'"
                        :value.sync="value.property.list"
                        :hint="'List to insert into'"
                        :required="true"
                ></variables-field>

                <variables-field
                        :label="'Index'"
                        :hint="'Index for insert position'"
                        :value.sync="value.property.index"
                        :required="true"

                ></variables-field>

                <variables-field
                        :label="'Value'"
                        :hint="'Value to insert'"
                        :value.sync="value.property.value"
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
    export default class InsertIntoListPanel extends Mixins(KeywordPanel) {
    }
</script>