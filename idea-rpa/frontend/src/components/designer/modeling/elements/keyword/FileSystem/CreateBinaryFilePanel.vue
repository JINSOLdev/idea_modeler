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
                
                <variables-field
                        :label="'Content'"
                        :hint="'Content to write'"
                        :value.sync="value.property.content"
                ></variables-field>

                <switch-field
                        :label="'Overwrite'"
                        :value.sync="value.property.overwrite"
                        :hint="'Replace existing file'"
                ></switch-field>
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
    export default class CreateBinaryFilePanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Creates a new binary file, and writes content if any is given."
            this.$emit("setDescription", description)
        }
    }
</script>