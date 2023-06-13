<template>
</template>

<script lang="ts">

    import Draggable from "vuedraggable";
    import { Task } from "@/types/Task";
    import { Component, Prop, Vue } from "vue-property-decorator";

    @Component({
        components: {
            Draggable,
        }
    })
    export default class ModelElement extends Vue {
        @Prop({required: true}) readonly child!: Task[];
        @Prop() value!: any;

        // Data
        isOpenMenu: boolean = false
        menuStyle: any = {}
        menuItems: any[] = [
            {
                name: 'Delete'
            }
        ]

        // Methods
        getComponentName(task: any) {
            if (task.type == "DefinitionKeyword") {
                return "keyword-element"
            } else if (task.type == "Keyword") {
                if(task.name.includes('JSON')) {
                    var name = task.name.replace('JSON', 'J S O N')
                    return this.kebabCase(name);
                }
                return this.kebabCase(task.name)
            } else {
                return task.type
            }
        }
        
        openPanel(evt: any, value: any) {
            this.$emit('openPanel', evt, value)
        }

        openContextMenu(evt: any, value: any) {
            this.$emit('openContextMenu', evt, value)
        }

        kebabCase(str: string) {
            const result = str
                .replace(/([a-z])([A-Z])/g, "$1-$2")
                .replace(/[\s_]+/g, '-')
                .toLowerCase();
            return result
        }
    }
</script>

<style scoped>
</style>
  