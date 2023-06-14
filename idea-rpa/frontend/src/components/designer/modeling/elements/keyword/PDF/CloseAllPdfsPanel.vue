<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
            </v-card-title>
            <v-card-text>
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
    export default class CloseAllPdfsPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Close all opened PDF file descriptors."
            this.$emit("setDescription", description)
        }
    }
</script>