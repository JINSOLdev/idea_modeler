<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>
            
            <v-card-text>
                <variables-field
                        :label="'Dictionary'"
                        :hint="'Dictionary to get items from'"
                        :value.sync="value.property.dictionary"
                        :required="true"
                ></variables-field>

                <v-switch
                        v-model="value.property.sortKeys"
                        label="Sort Keys"
                        hint="Sort output by keys"
                        persistent-hint
                        class="py-0 mb-6"
                ></v-switch>

                <v-divider></v-divider>
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
    export default class GetDictionaryKeysPanel extends Mixins(KeywordPanel) {
    }
</script>