<template>
    <div class="py-1">
        <div v-for="item in value.property.branch"
                :key="item.id"
        >
            <div v-if="item.status" 
                    class="box-area"
                    @contextmenu.prevent="openContextMenu($event, item)"
                    :class="{ 'selected' : selectedValue && selectedValue.id == item.id }"
            >
                <p class="mb-2">{{ item.name }}</p>
                <draggable 
                        class="drag-area"
                        tag="ul"
                        :list="item.child"
                        group="task"
                >
                    <li v-for="task in item.child" 
                            :key="task.id"
                            class="child-task"
                            @dblclick="openPanel($event, task)"
                            @contextmenu="openContextMenu($event, task)"
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
        </div>
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
    export default class TryExceptTask extends Mixins(ModelElement) {
    }
</script>

<style scoped>
    .box-area {
        margin: 24px;
        outline: grey 1px solid;
    }
    .drag-area {
        list-style: none;
        min-height: 30px;
        padding: 4px;
    }

    .child-task {
        margin: 12px;
        list-style: none;
        background-color: lightgrey;
        outline: 1px dashed;
    }
</style>