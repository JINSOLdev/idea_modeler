<template>
    <div class="mb-2">
        <div v-if="isMultiple" flat>
            <div class="d-flex">
                <div class="mr-auto ml-2">
                    {{ label }}
                </div>
                <v-btn icon @click="addValue">
                    <v-icon>mdi-plus</v-icon>
                </v-btn>
            </div>
            
            <v-row v-for="(val, idx) in newValue" 
                    :key="val+idx"
                    style="max-height: 70px;"
            >
                <v-col>
                    <v-combobox
                            v-model="newValue[idx]"
                            :items="varItems"
                            item-text="name"
                            item-disabled="disabled"
                            item-value="defaultValue"
                            persistent-hint
                            outlined
                            dense
                            clearable
                    ></v-combobox>
                </v-col>
                <v-col cols="1" style="padding: 12px 0px;">
                    <v-btn icon @click="delValue(idx)">
                        <v-icon>mdi-delete-outline</v-icon>
                    </v-btn>
                </v-col>
            </v-row>
            <span class="multi-hint">{{ hint }}</span>
        </div>

        <div v-else>
            <div class="d-flex mb-1">
                <div class="mr-auto ml-2">{{ label }}</div>
                <div v-if="required" class="mr-2">required</div>
            </div>
            <v-combobox
                    v-model="newValue"
                    :items="varItems"
                    item-text="name"
                    item-disabled="disabled"
                    item-value="defaultValue"
                    :hint="hint"
                    :placeholder="placeholder"
                    persistent-hint
                    persistent-placeholder
                    outlined
                    dense
                    clearable
            ></v-combobox>
        </div>
    </div>
</template>


<script lang="ts">
    import { Vue, Component, Prop } from "vue-property-decorator";
    import { Variables } from  "@/types/Variables";

    @Component
    export default class VariablesField extends Vue {
        @Prop() public value!: any
        @Prop() public label!: string
        @Prop() public hint!: string
        @Prop() public placeholder!: string
        @Prop() public isMultiple!: boolean
        @Prop() public required!: boolean
        
        varItems: any[] = []
        newValue: any = null

        mounted() {
            var modelCanvas = this.getComponent('ModelCanvas')

            var suiteVariables = modelCanvas.robot.getVariables()
            if (suiteVariables.length > 0) {
                this.varItems = [
                    ...[{ name: 'Suite Variables', disabled: true }],
                    ...suiteVariables
                ]
            }
            
            var variables = new Variables()

            var taskVariables = variables.getTaskVariables()
            if (taskVariables.length > 0) {
                this.varItems = [
                    ...this.varItems,
                    ...[{ name: 'Task Variables', disabled: true }],
                    ...suiteVariables
                ]
            }

            var globalVariables = variables.getGlobalVariables()
            this.varItems = [
                ...this.varItems,
                ...[{ name: 'Global Variables', disabled: true }],
                ...globalVariables
            ]

            if (this.isMultiple) {
                if (this.value && this.value.length > 0) {
                    this.newValue = this.value
                } else {
                    this.newValue = [{
                        name: "",
                        valueType: "Scalar",
                        defaultValue: null
                    }]
                }
            } else {
                if (this.value && this.value.defaultValue) {
                    this.newValue = this.value
                } else {
                    this.newValue = null
                }
            }
        }

        destroyed() {
            this.updateValue()
        }

        // Methods
        getComponent(componentName: string): any {
            let component = null
            let parent = this.$parent
            while (parent && !component) {
                if (parent.$options.name === componentName) {
                    component = parent
                }
                parent = parent.$parent
            }
            return component
        }

        updateValue() {
            if (!this.isMultiple) {
                if (typeof this.newValue == 'string') {
                    this.newValue =  {
                        name: this.newValue,
                        valueType: "String",
                        defaultValue: this.newValue
                    }
                }
                if (this.required && this.newValue != null) {
                    this.newValue.required = true
                }
            }
            
            this.$emit('update:value', this.newValue)
        }

        addValue() {
            var lastIdx = this.newValue.length - 1
            if (lastIdx == -1 || (lastIdx >= 0 && this.newValue[lastIdx] != "")) {
                this.newValue.push({
                    name: "",
                    valueType: "Scalar",
                    defaultValue: null
                })
            }
        }

        delValue(idx: number) {
            this.newValue.splice(idx, 1)
            this.updateValue()
        }

    }
</script>

<style scoped>
    .multi-hint {
        margin-left: 10px;
        font-size: 12px;
    }

</style>