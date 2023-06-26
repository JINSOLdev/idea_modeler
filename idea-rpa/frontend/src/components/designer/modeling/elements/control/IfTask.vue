<template>
    <div>
        <draggable
                tag="div" 
                :list="child"
                :group="{ name: 'task', put: false }"
                :disabled="true"
                class="pa-2"
        >
            <div class="row mx-auto my-0">
                <v-col v-for="item in value.property.conditions"
                        :key="item.id"
                >
                    <v-sheet
                            rounded
                            max-width="300"
                            class="condition-area"
                            @contextmenu.prevent="openContextMenu($event, item)"
                            :class="{ 'selected' : selectedValue && selectedValue.id == item.id }"
                    >
                        {{ item.type }}
                        <draggable 
                                tag="ul" 
                                class="drag-area" 
                                :list="item.child" 
                                group="task"
                        >
                            <li v-for="task in item.child" 
                                    :key="task.id"
                                    class="child-task px-3"
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
                    </v-sheet>
                </v-col>
            </div>
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
    export default class IfTask extends Mixins(ControlElement) {
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

    .condition-area {
        margin: auto;
        background-color: #eee !important;
        border: 1px solid #eee;
    }
</style>