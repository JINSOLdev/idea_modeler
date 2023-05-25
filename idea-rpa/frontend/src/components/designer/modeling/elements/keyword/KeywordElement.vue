<template>
    <div>
        <p>{{ value.name }}</p>
        <draggable
                v-if="value.type != 'DefinitionKeyword'"
                class="dragKeyword" 
                tag="ul" 
                :list="child" 
                :group="{ name: 'task', put: false }"
                style="padding: 0px !important;"
        ></draggable>

        <draggable
                v-else
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
    import ModelElement from '../ModelElement.vue'

    @Component({
        components: {
            ModelElement,
        }
    })
    export default class KeywordElement extends Mixins(ModelElement) {
    }
</script>

<style scoped>
    .dragKeyword {
        list-style: none;
        padding: 10px 0px;
    }

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