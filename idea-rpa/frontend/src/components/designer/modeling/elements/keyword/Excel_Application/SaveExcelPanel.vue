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
    export default class SaveExcelPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Documentation"
            this.$emit("setDescription", description)
        }
    }
</script>