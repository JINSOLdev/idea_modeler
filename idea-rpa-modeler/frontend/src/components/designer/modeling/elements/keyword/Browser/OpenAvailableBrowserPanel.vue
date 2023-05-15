<template>
    <v-card flat>
        <v-card-text>
            <v-text-field
                    label="URL"
                    v-model="value.url"
            ></v-text-field>
            <v-switch
                    v-model="value.headless"
                    label="Headless"
                    color="success"
                    hide-details
            ></v-switch>
            <v-switch
                    v-model="value.maximized"
                    label="Maximized"
                    color="success"
                    hide-details
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
    export default class OpenAvailableBrowserPanel extends Mixins(KeywordPanel) {
    }
</script>