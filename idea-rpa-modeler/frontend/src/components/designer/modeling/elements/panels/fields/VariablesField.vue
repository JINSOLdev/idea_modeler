<template>
    <div>
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
                    <v-autocomplete
                            v-model="newValue[idx]"
                            :items="varItems"
                            item-disabled="disabled"
                            :rules="rules"
                            persistent-hint
                            outlined
                            dense
                    ></v-autocomplete>
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
            <v-autocomplete
                    v-model="newValue"
                    :value="value"
                    :items="varItems"
                    item-disabled="disabled"
                    :rules="rules"
                    :label="label"
                    :hint="hint"
                    persistent-hint
                    outlined
                    dense
            ></v-autocomplete>
        </div>
    </div>
</template>


<script lang="ts">
    import { Vue, Component, Prop } from "vue-property-decorator";
    import { Variables } from  "@/types/Variables";

    @Component
    export default class VariablesField extends Vue {
        @Prop() public value!: any
        @Prop() public rules!: any[]
        @Prop() public label!: string
        @Prop() public hint!: string
        @Prop() public isMultiple!: boolean
        
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