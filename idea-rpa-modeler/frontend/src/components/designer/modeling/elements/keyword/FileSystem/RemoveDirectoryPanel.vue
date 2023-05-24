<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <path-field
                        :label="'Path'"
                        :hint="'Path to directory'"
                        :value.sync="value.property.path"
                ></path-field>

                <v-switch
                        v-model="value.property.formattingAsEmpty"
                        label="Recursive"
                        hint="Remove all subdirectories and files"
                        persistent-hint
                        class="py-0"
                ></v-switch>


            </v-card-text>
        </v-card>

</template>

<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordPanel from '../../panels/KeywordPanel.vue'

    @Component({
        components: {
            KeywordPanel,
        }
    })
    export default class RemoveDirectoryPanel extends Mixins(KeywordPanel) {
    }
</script>