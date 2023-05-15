<template>
    <div>
        <p>{{ value.name }}</p>
        <draggable 
                class="dragArea" 
                tag="ul" 
                :list="child" 
                group="task"
        >
            <li v-for="task in child" 
                    :key="task.id"
                    class="child-task"
                    @dblclick="openPanel($event, task)"
                    @contextmenu="openContextMenu($event, task)"
            >
                <component
                        :is="getComponentName(task)"
                        :child="task.child"
                        :value="task"
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
    .dragArea {
        list-style: none;
        min-height: 40px;
        padding: 10px 0px;
    }

    .child-task {
        margin: auto 10px;
        list-style: none;
        background-color: lightgrey;
        outline: 1px dashed;
    }
</style>