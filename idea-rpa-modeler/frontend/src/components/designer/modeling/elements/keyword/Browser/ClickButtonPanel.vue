<template>
    <v-card flat>
        <v-card-text></v-card-text>
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
    export default class ClickButtonPanel extends Mixins(KeywordPanel) {
    }
</script>