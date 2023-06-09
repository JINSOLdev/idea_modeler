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
                        :label="'Extension'"
                        :hint="'New file extension'"
                        :value.sync="value.property.extension"
                        :required="true"
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
    export default class ChangeFileExtensionPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Replaces file extension for file at given path. the file extension can be removed by passing an empty string."
            this.$emit("setDescription", description)
        }
    }
</script>