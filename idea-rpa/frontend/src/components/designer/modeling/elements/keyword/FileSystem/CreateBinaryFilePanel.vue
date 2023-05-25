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
                ></path-field>
                <variables-field
                        :label="'Content'"
                        :hint="'Content to write'"
                        :value.sync="value.property.content"
                ></variables-field>

                <v-switch
                        v-model="value.property.formattingAsEmpty"
                        label="Overwrite"
                        hint="Replace existing file"
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
    export default class CreateBinaryFilePanel extends Mixins(KeywordPanel) {
    }
</script>