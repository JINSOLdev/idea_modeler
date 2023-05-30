<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>
            
            <v-card-text>
                <variables-field
                        :label="'Name'"
                        :hint="'Name of library to import'"
                        :value.sync="value.property.name"
                ></variables-field>

                <variables-field
                        :label="'Args'"
                        :hint="'Arguments for library'"
                        :value.sync="value.property.args"
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
    export default class ImportLibraryPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Imports a library with the given name and optional arguments."
            this.$emit("setDescription", description)
        }
    }
</script>