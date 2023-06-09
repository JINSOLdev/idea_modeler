<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Filename'"
                        :hint="'Word document path'"
                        :value.sync="value.property.filename"
                ></variables-field>
  
                <v-switch
                        v-model="value.property.read_only"
                        label="Read Only"
                        persistent-hint
                        class="py-0 mb-6"
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
    export default class OpenFilePanel extends Mixins(KeywordPanel) {
    }
</script>