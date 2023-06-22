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
                <v-col v-for="(item, idx) in value.property.conditions"
                        :key="item.type+idx"
                >
                    <v-sheet
                            rounded
                            max-width="300"
                            class="mx-auto"
                            color="grey lighten-3"
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
                                    class="child-task mx-auto px-2"
                                    @dblclick="openPanel($event, task)"
                                    @contextmenu.prevent="openContextMenu($event, task)"
                                    :class="{ 'selected' : selectedValue && selectedValue.id == task.id }"
                            >
                                <component
                                        :is="getComponentName(task)"
                                        :child.sync="task.child"
                                        :value.sync="task"
                                        :isOpenMenu.sync="isOpenMenu"
                                        :isOpenPanel.sync="isOpenPanel"
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
    
    .selected {
        border: 1px solid #2196F3;
        margin-bottom: 10px;
    }
</style>