<template>
</template>

<script lang="ts">

    import Draggable from "vuedraggable";
    import { Task } from "@/types/Task";
    import { Component, Prop, Vue, Watch } from "vue-property-decorator";

    @Component({
        components: {
            Draggable,
        }
    })
    export default class ModelElement extends Vue {
        @Prop({required: true}) readonly child!: Task[];
        @Prop({required: true}) value!: any;
        @Prop() isOpenMenu!: boolean;
        @Prop() isOpenPanel!: boolean;

        // Data
        public selectedValue: any = null

        @Watch('isOpenMenu', { immediate: true, deep: true })
        menuStatus(val: any) {
            if (!val) {
                this.$set(this, "selectedValue", null)
            }
        }
        @Watch('isOpenPanel', { immediate: true, deep: true })
        panelStatus(val: any) {
            if (!val) {
                this.$set(this, "selectedValue", null)
            }
        }

        // Methods
        init() {}
        
        getComponentName(task: any) {
            if (task.type == "DefinitionKeyword") {
                return "keyword-element"
            } else if (task.type == "Keyword") {
                if(task.name.includes('JSON')) {
                    var name = task.name.replace('JSON', 'J S O N')
                    return this.kebabCase(name);
                } else if (task.name == 'Select') {
                    return task.name
                }
                return this.kebabCase(task.name)
            } else {
                return task.type
            }
        }
        
        openPanel(evt: any, value: any) {
            if (value) {
                this.$set(this, "selectedValue", value)
            } else {
                this.$set(this, "selectedValue", null)
            }
            this.$emit('openPanel', evt, value)
        }

        openContextMenu(evt: any, value: any) {
            if (value) {
                this.$set(this, "selectedValue", value)
            } else {
                this.$set(this, "selectedValue", null)
            }
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
  