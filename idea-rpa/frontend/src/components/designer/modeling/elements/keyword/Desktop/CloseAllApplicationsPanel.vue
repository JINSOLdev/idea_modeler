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
    export default class CloseAllApplicationsPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Close all opened applications."
            this.$emit("setDescription", description)
        }
    }
</script>