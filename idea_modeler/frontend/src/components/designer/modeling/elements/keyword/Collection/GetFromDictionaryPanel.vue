<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>
            
            <v-card-text>
                <variables-field
                        :label="'Dictionary'"
                        :hint="'Dictionary to get value from'"
                        :value.sync="value.property.dictionary"
                        :required="true"
                ></variables-field>

                <variables-field
                        :label="'Key'"
                        :hint="'Key for value'"
                        :value.sync="value.property.key"
                        :required="true"
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
    export default class GetFromDictionaryPanel extends Mixins(KeywordPanel) {
    }
</script>