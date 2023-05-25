<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <Locator-field
                        :label="'Locator'"
                        :hint="'Locator for element'"
                        :value.sync="value.property.locator"
                        :required="true"
                ></Locator-field>
            </v-card-text>

            <v-card-text>
                <path-field
                        :label="'File Path'"
                        :hint="'Path to input file'"
                        :value.sync="value.property.file_path"
                        :required="true"
                ></path-field>
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
    export default class ChooseFilePanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Inputs the file_path into the file input field locator."
            this.$emit("setDescription", description)
        }
    }
</script>