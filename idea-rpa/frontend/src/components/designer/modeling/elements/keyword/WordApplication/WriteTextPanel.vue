<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Text'"
                        :hint="'string to write'"
                        :value.sync="value.property.text"
                ></variables-field>

                <v-switch
                        v-model="value.property.newline"
                        label="Newline"
                        hint="write text to newline if True, default to True"
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
    export default class WriteTextPanel extends Mixins(KeywordPanel) {
    }
</script>