<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Doc'"
                        :hint="'JSON-compatible object'"
                        :value.sync="value.property.doc"
                        :required="true"
                ></variables-field>

                <variables-field
                        :label="'Filename'"
                        :hint="'Path to output file'"
                        :value.sync="value.property.filename"
                ></variables-field>


                <variables-field
                        :label="'Indent'"
                        :hint="'Indentation for JSON'"
                        :value.sync="value.property.indent"
                ></variables-field>

                <variables-field
                        :label="'Encoding'"
                        :hint="'Output character endcoding'"
                        :value.sync="value.property.encoding"
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
    export default class SaveJSONToFilePanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Save a JSON serializable object or a string containing a JSON value into a file."
            this.$emit("setDescription", description)
        }

    }
</script>