<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Bytes'"
                        :hint="'Bytes to convert'"
                        :value.sync="value.property.bytes"
                        :required="true"
                ></variables-field>
            
                <variables-field
                        :label="'Encoding'"
                        :hint="'Input encoding'"
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
    export default class DecodeBytesToStringPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Decodes the given bytes to a Unicode string using the given encoding."
            this.$emit("setDescription", description)
        }
    }
</script>