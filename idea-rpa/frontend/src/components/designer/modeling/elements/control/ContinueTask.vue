<template>
    <div>
        <p>{{ value.name }}</p>
        <draggable
                class="drag-area" 
                tag="ul" 
                :list="child" 
                :group="{ name: 'task', put: false }"
                style="padding: 0px !important;"
        ></draggable>
    </div>
</template>

<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import ModelElement from '../ModelElement.vue'

    @Component({
        components: {
            ModelElement,
        }
    })
    export default class ContinueTask extends Mixins(ModelElement) {
    }
</script>

<style scoped>
    .drag-area {
        list-style: none;
        padding: 10px 0px;
    }
</style>