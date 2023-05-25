<template>
    <div>
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
    export default class ClareClipboardPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Clear the system clipboard."
            this.$emit("setDescription", description)
        }
    }
</script>