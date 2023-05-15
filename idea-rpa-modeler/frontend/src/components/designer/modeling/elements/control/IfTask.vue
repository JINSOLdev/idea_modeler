<template>
    <div>
        <draggable
                tag="div" 
                :list="child"
                :group="{ name: 'task', put: false }"
                style="padding: 8px;"
        >
            <draggable
                    tag="div"
                    class="row mx-auto my-0"
                    :list="value.conditions"
                    group="conditions"
            >
                <v-col v-for="(item, idx) in value.conditions"
                        :key="item.type+idx">
                    <v-sheet
                            rounded
                            max-width="300"
                            class="mx-auto"
                            color="grey lighten-3"
                    >
                        {{ item.type }}
                        <draggable 
                                tag="ul" 
                                class="dragArea" 
                                :list="item.keywords" 
                                group="task"
                        >
                            <li v-for="task in item.keywords" 
                                    :key="task.id"
                                    class="child-task mx-auto px-2"
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
                    </v-sheet>
                </v-col>
            </draggable>
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
    .dragArea {
        list-style: none;
        min-height: 40px;
        padding: 10px;
    }

    .child-task {
        list-style: none;
        background-color: lightgrey;
        outline: 1px dashed;
    }
    
</style>