<template>
    <div>
        <p>{{ value.name }}</p>
        <draggable 
                class="drag-area" 
                tag="ul" 
                :list="child" 
                group="task"
        >
            <li v-for="task in child" 
                    :key="task.id"
                    class="child-task"
                    @dblclick="openPanel($event, task)"
                    @contextmenu.prevent="openContextMenu($event, task)"
                    :class="{ 'selected' : selectedValue && selectedValue.id == task.id }"
            >
                <component
                        :is="getComponentName(task)"
                        :child.sync="task.child"
                        :value.sync="task"
                        :selectedValue.sync="selectedValue"
                        @openPanel="openPanel"
                        @openContextMenu="openContextMenu"
                ></component>
            </li>
        </draggable>
    </div>
</template>

<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import ControlElement from './ControlElement.vue'
    
    @Component({
        components: {
            ControlElement,
        }
    })
    export default class ForTask extends Mixins(ControlElement) {
        mounted() {
        }
    }
</script>

<style scoped>
    .drag-area {
        list-style: none;
        min-height: 40px;
        padding: 4px;
    }

    .child-task {
        margin: 12px;
        list-style: none;
        background-color: lightgrey;
        outline: 1px dashed;
    }
</style>