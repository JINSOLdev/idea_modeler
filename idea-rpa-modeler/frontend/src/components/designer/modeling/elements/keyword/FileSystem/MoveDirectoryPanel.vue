<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <path-field
                        :label="'Source'"
                        :hint="'Path to source directory'"
                        :value.sync="value.property.source"
                ></path-field>

                <path-field
                        :label="'Destination'"
                        :hint="'Path to move to'"
                        :value.sync="value.property.destination"
                ></path-field>

                <v-switch
                        v-model="value.property.formattingAsEmpty"
                        label="Overwrite"
                        hint="Replace destination directory"
                        persistent-hint
                        class="py-0"
                ></v-switch>
               
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
    export default class MoveDirectoryPanel extends Mixins(KeywordPanel) {
    }
</script>