<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <v-switch
                        v-model="value.property.save_changes"
                        label="Save Changes"
                        hint="Quit the application"
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
    export default class QuitApplicationPanel extends Mixins(KeywordPanel) {
    }
</script>