<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <path-field
                        :label="'Path'"
                        :hint="'Path to file'"
                        :value.sync="value.property.source"
                        :required="true"
                ></path-field>

                <variables-field
                        :label="'Encoding'"
                        :hint="'Character encoding of input file'"
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
    export default class ReadFilePanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Reads a file as text, with given encoding, and returns the content."
            this.$emit("setDescription", description)
        }
    }
</script>