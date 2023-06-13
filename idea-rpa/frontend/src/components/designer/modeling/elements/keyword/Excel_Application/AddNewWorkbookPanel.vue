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
    export default class AddNewWorkbookPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Adds new workbook for Excel application"
            this.$emit("setDescription", description)
        }
    }
</script>