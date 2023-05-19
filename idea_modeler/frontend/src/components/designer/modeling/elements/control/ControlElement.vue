<template>
</template>

<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import ModelElement from '../ModelElement.vue'

    @Component({
        components: {
            ModelElement,
        }
    })

    export default class ControlElement extends Mixins(ModelElement) {
    }
</script>

<style scoped>
</style>