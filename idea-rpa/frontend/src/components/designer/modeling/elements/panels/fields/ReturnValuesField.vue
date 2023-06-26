<template>
    <div>
        <v-card flat>
            <v-card-title class="d-flex">
                <div v-if="label" class="subtitle-1 mr-auto">
                    {{ label }}
                </div>
                <div v-else class="subtitle-1 mr-auto">
                    Assign Return Values
                </div>
                <v-btn icon @click="addValue">
                    <v-icon>mdi-plus</v-icon>
                </v-btn>
            </v-card-title>
            
            <v-card-text>
                <v-row v-for="(val, idx) in newValue"
                        :key="val+idx"
                        style="max-height: 70px;"
                >
                    <v-col>
                        <v-combobox
                                v-if="isVars"
                                v-model="newValue[idx].defaultValue"
                                :items="varItems"
                                item-disabled="disabled"
                                outlined
                                dense
                                @keydown="updateValue"
                        ></v-combobox>
                        <v-text-field
                                v-else
                                v-model="newValue[idx].defaultValue"
                                outlined
                                dense
                                @keydown="updateValue"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="1" style="padding: 12px 0px;">
                        <v-btn icon @click="delValue(idx)">
                            <v-icon>mdi-delete-outline</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
                <span v-if="newValue.length == 0 && !hint">
                    No return values assigned.
                </span>
                <span v-else-if="newValue.length == 0 && hint">
                    {{ hint }}
                </span>
            </v-card-text>
        </v-card>
    </div>
</template>


<script lang="ts">
    import { Vue, Component, Prop } from "vue-property-decorator";
    import { Variables } from  "@/types/Variables";
    
    @Component
    export default class ReturnValuesField extends Vue {
        @Prop() public value!: any[]
        @Prop() public label!: string
        @Prop() public hint!: string
        @Prop() public isVars!: boolean
        
        varItems: any[] = []
        newValue: any[] = [{
            name: "",
            valueType: "Scalar",
            defaultValue: ""
        }]
        
        mounted() {
            var variables = new Variables()
            this.varItems = variables.getVarList()

            if(!this.value || this.value.length < 1) {
                this.newValue = []
            } else {
                this.newValue = this.value
            }
        }

        destroyed() {
            this.updateValue()
        }

        // Methods
        updateValue() {
            this.newValue.forEach((val: any, idx: number) => {
                if (typeof val == "string") {
                    val = {
                        name: val,
                        valueType: "Scalar",
                        defaultValue: val
                    }
                }
                if (val.defaultValue && (val.name == null || val.name == "")) {
                    val.name = val.defaultValue
                }
            })

            this.$emit('update:value', this.newValue)
        }

        addValue() {
            var lastIdx = this.newValue.length - 1
            if (lastIdx == -1 || (lastIdx >= 0 && this.newValue[lastIdx] != "")) {
                this.newValue.push({
                    name: "",
                    valueType: "Scalar",
                    defaultValue: ""
                })
            }
        }

        delValue(idx: number) {
            this.newValue.splice(idx, 1)
            this.updateValue()
        }

    }
</script>