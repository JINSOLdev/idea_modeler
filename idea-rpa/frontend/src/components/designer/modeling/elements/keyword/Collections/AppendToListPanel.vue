<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>
            
            <v-card-text>
                <variables-field
                        :label="'List'"
                        :hint="'List to append to'"
                        :value.sync="value.property.list_"
                ></variables-field>

                <variables-field
                        :label="'Values'"
                        :hint="'Values to append'"
                        :value.sync="value.property.values"
                        :isMultiple="true"
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
    export default class AppendToListPanel extends Mixins(KeywordPanel) {
    }
</script>