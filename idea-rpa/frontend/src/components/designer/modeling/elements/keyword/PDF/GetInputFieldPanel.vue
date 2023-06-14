<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <path-field
                        :label="'Source Path'"
                        :hint="'Path to source PDF'"
                        :value.sync="value.property.source_path"
                ></path-field>

                <switch-field
                        :value.sync="value.property.replace_none_value"
                        :label="'Replace None Value'"
                        :hint="'Replace none values with the fields name'"
                ></switch-field>

                <variables-field
                        :label="'Encoding'"
                        :hint="`Encoding used for field name/value parsing. positive values are 'iso-8859-1, utf-8 or utf -16'`"
                        :value.sync="value.property.encoding"
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
    export default class GetInputFieldPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Get input fields in the PDF."
            this.$emit("setDescription", description)
        }

    }
</script>