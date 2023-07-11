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
    export default class ClareAnchorPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Clears control anchor set by Set Anchor."
            this.$emit("setDescription", description)
        }
    }
</script>