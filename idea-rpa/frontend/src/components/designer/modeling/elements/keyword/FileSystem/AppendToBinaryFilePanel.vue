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
                        :value.sync="value.property.path"
                        :required="true"
                ></path-field>
                <path-field
                        :label="'Content'"
                        :hint="'Content to append'"
                        :value.sync="value.property.content"
                        :required="true"
                ></path-field>

                <variables-field
                        :label="'Encoding'"
                        :hint="'Character encoding of written content'"
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
    export default class AppendToBinaryFilePanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Appends binary content to the given file."
            this.$emit("setDescription", description)
        }
    }
</script>