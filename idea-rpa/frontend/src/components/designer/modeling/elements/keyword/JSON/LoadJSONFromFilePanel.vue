<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Filename'"
                        :hint="'Path to input file'"
                        :value.sync="value.property.filename"
                        :required="true"
                ></variables-field>

                <variables-field
                        :label="'Encoding'"
                        :hint="'Input character encoding'"
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
    export default class LoadJSONFromFilePanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Load JSON data from a file, and return it as JSON serializable object. Depending on the input file the object can be either a dictionary, a list, or a scalar value."
            this.$emit("setDescription", description)
        }

    }
</script>