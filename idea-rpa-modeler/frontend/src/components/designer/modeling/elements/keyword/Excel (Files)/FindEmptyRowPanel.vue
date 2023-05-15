<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Content'"
                        :hint="'Rows of values to append'"
                        :value.sync="value.property.content"
                ></variables-field>

                <variables-field
                        :label="'Name'"
                        :hint="'Name of worksheet'"
                        :value.sync="value.property.name"
                ></variables-field>

                <v-switch
                        v-model="value.property.header"
                        label="Header"
                        hint="Map to existing header now"
                        persistent-hint
                        class="py-0 mb-6"
                ></v-switch>

                <variables-field
                        :label="'Start'"
                        :hint="'Start row index'"
                        :value.sync="value.property.start"
                ></variables-field>

                <v-switch
                        v-model="value.property.formattingAsEmpty"
                        label="Formatting As Empty"
                        hint="Consider rows containing only formatting as empty"
                        persistent-hint
                        class="py-0"
                ></v-switch>
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
    export default class FindEmptyRowPanel extends Mixins(KeywordPanel) {
    }
</script>