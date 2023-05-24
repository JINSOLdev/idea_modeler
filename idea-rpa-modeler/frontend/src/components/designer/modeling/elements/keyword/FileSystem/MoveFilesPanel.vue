<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <path-field
                        :label="'Source'"
                        :hint="'File(s) to move'"
                        :value.sync="value.property.source"
                ></path-field>

                <path-field
                        :label="'Destination'"
                        :hint="'Destination path'"
                        :value.sync="value.property.destination"
                ></path-field>

                <v-switch
                        v-model="value.property.formattingAsEmpty"
                        label="Overwrite"
                        hint="Replace files in destination"
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
    export default class MoveFilesPanel extends Mixins(KeywordPanel) {
    }
</script>