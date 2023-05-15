<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Clears control anchor set by Set Anchor
            </v-card-title>
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
    export default class ClareArchorPanel extends Mixins(KeywordPanel) {
    }
</script>