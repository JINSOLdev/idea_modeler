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
    export default class WhileTask extends Mixins(ControlElement) {
        mounted() {
            this.init()
        }

        init() {
            var keys = Object.keys(this.value.property)
            if (!keys || keys.length < 1) {
                this.value.property = new Map()
                    this.$set(this.value.property, "limit", "Not set")
            }

            if (!this.value.property.hasOwnProperty("limit")) {
                this.$set(this.value.property, "limit", "Not set")
            }
        }
        
        // this.value.property.limit = "Not set"
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