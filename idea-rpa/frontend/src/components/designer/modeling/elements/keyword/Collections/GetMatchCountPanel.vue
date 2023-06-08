<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>
            
            <v-card-text>
                <variables-field
                        :label="'List'"
                        :hint="'List to search'"
                        :value.sync="value.property.list"
                        :required="true"
                ></variables-field>

                <variables-field
                        :label="'Pattern'"
                        :hint="'Pattern for matching values'"
                        :value.sync="value.property.pattern"
                        :required="true"
                ></variables-field>

                <switch-field
                        :label="'Case Insensitive'"
                        :hint="'Ignore case when matching'"
                        :value.sync="value.property.case_insensitive"
                ></switch-field>

                <switch-field
                        :label="'Whitespace Insensitive'"
                        :hint="'Ignore whitespace when matching'"
                        :value.sync="value.property.whitespace_insensitive"
                ></switch-field>
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
    export default class GetMatchCountPanel extends Mixins(KeywordPanel) {
    }
</script>