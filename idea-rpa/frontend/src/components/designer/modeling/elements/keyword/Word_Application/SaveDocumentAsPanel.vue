<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Filename'"
                        :hint="'Where to save document'"
                        :value.sync="value.property.filename"
                ></variables-field>

                <variables-field
                        :label="'Fileformat'"
                        :hint="'see @FILEFORMATS dictionary for possible format, defaults to None'"
                        :value.sync="value.property.fileformat"
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
    export default class SaveDocumentAsPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Save document with filename and optionally with given fileformat"
            this.$emit("setDescription", description)
        }
    }
</script>