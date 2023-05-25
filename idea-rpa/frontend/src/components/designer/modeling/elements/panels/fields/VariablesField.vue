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
                            item-disabled="disabled"
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
                    item-disabled="disabled"
                    :hint="hint"
                    persistent-hint
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
        @Prop() public isMultiple!: boolean
        @Prop() public required!: boolean

        
        varItems: any[] = []
        newValue: any = null

        mounted() {
            var variables = new Variables()
            this.varItems = variables.getVarList()
            
            if (this.isMultiple && (!this.value || this.value.length < 1)) {
                this.newValue = [ "" ]
            } else {
                this.newValue = this.value
            }
        }

        destroyed() {
            this.updateValue()
        }

        // Methods
        updateValue() {
            if(typeof this.newValue == "object") {
                this.newValue = this.newValue.value
            }
            this.$emit('update:value', this.newValue)
        }

        addValue() {
            var lastIdx = this.newValue.length - 1
            if (lastIdx == -1 || (lastIdx >= 0 && this.newValue[lastIdx] != "")) {
                this.newValue.push("")
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