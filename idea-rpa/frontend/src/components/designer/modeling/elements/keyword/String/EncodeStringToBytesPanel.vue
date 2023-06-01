<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'String'"
                        :hint="'String to encode'"
                        :value.sync="value.property.string"
                        :required="true"
                ></variables-field>
            
                <variables-field
                        :label="'Encoding'"
                        :hint="'Output encoding'"
                        :value.sync="value.property.encoding"
                        :required="true"
                ></variables-field>
           
                <variables-field
                        :label="'Errors'"
                        :hint="'How to handle errors, i.e. `strict`, `ignore`, or `replace`'"
                        :value.sync="value.property.string"
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
    export default class EncodeStringToBytesPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Encodes the given Unicode string to bytes using the given encoding."
            this.$emit("setDescription", description)
        }
    }
</script>