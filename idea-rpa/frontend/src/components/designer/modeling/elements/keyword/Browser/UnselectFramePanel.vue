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
    
    export default class UnselectFramePanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Sets the main frame as the current frame."
            this.$emit("setDescription", description)
        }
    }
</script>