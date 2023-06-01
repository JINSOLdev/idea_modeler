<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'String'"
                        :hint="'String to read.'"
                        :value.sync="value.property.string"
                        :required="true"
                ></variables-field>
            
                <variables-field
                        :label="'Start'"
                        :hint="'Start index'"
                        :value.sync="value.property.start"
                        :required="true"
                ></variables-field>

                <variables-field
                        :label="'End'"
                        :hint="'End index'"
                        :value.sync="value.property.end"
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
    export default class GetSubstringPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Returns a substring from start index to end index."
            this.$emit("setDescription", description)
        }
    }
</script>