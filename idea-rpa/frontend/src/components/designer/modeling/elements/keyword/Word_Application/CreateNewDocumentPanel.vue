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
    export default class CreateNewDocumentPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Create new document for Word application"
            this.$emit("setDescription", description)
        }
    }
</script>