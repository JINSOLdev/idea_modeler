<template>
    <div class="TryExcpetArea">
        <!-- Try -->
        <div class="try-area">
            <p class="mb-2">Try</p>
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

        <!-- Except -->
        <div v-if="value.property.except"
                class="except-area"
        >
            <p class="mb-2">Except</p>
            <draggable 
                    class="drag-area"
                    tag="ul"
                    :list="value.property.exceptChild"
                    group="task"
            >
                <li v-for="task in value.property.exceptChild" 
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

        <!-- Else -->
        <div v-if="value.property.elseBranch"
                class="else-area"
        >
            <p class="mb-2">Else</p>
            <draggable 
                    class="drag-area"
                    tag="ul"
                    :list="value.property.elseChild"
                    group="task"
            >
                <li v-for="task in value.property.elseChild" 
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

        <!-- Finally -->
        <div v-if="value.property.finallyBranch"
                class="finally-area"
        >
            <p class="mb-2">Finally</p>
            <draggable 
                    class="drag-area"
                    tag="ul"
                    :list="value.property.finallyChild"
                    group="task"
            >
                <li v-for="task in value.property.finallyChild" 
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
    .TryExcpetArea {
        min-height: 40px;
        padding: 10px;
    }
    .try-area {
        padding: 4px;
        outline: grey 1px solid;
    }
    
    .except-area {
        list-style: none;
        margin-top: 10px;
        padding: 5px;
        outline: grey 1px solid;
    }

    .else-area {
        list-style: none;
        margin-top: 10px;
        padding: 5px;
        outline: grey 1px solid;
    }

    .finally-area {
        list-style: none;
        margin-top: 10px;
        padding: 5px;
        outline: grey 1px solid;
    }

    .drag-area {
        padding: 0;
        list-style: none;
        min-height: 20px;
    }

    .child-task {
        margin: auto 10px;
        list-style: none;
        background-color: lightgrey;
        outline: 1px dashed;
    }
</style>