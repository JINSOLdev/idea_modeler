<template>
    <div>
        <v-card>
            <v-card-title>
                Variables
            </v-card-title>
            <v-card-text>
                <v-treeview
                        :items="globalVariables"
                        item-key="name"
                        item-children="list"
                        open-on-click
                >
                    <template v-slot:prepend="{ item }">
                        <div v-if="!item.list">
                            <v-icon small>mdi-variable</v-icon>
                        </div>
                    </template>
                </v-treeview>
                <v-treeview
                        :items="variables"
                        item-key="name"
                        item-children="list"
                        open-on-click
                >
                    <template v-slot:prepend="{ item }">
                        <div v-if="!item.list">
                            <v-icon small>mdi-variable</v-icon>
                        </div>
                    </template>
                    <template v-slot:append="{ item, index }">
                        <div v-if="!item.list">
                            <v-btn x-small icon @click="modifyVariable(item, index)">
                                <v-icon>
                                    {{ 'mdi-pencil-outline' }}
                                </v-icon>
                            </v-btn>
                            <v-btn x-small icon @click="deleteVariable(index)">
                                <v-icon>
                                    {{ 'mdi-delete-outline' }}
                                </v-icon>
                            </v-btn>
                        </div>
                    </template>
                </v-treeview>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text
                        @click="openVariableForm"
                >
                    Add Variable
                </v-btn>
            </v-card-actions>
        </v-card>

        <v-dialog v-model="variableForm" max-width="600">
            <v-card>
                <v-card-title>{{ isNewVar ? 'New' : 'Edit' }} Suite Variable</v-card-title>
                <v-card-text>
                    <v-row>
                        <v-col>
                            <v-text-field
                                    label="Variable Name"
                                    v-model="newVariable.name"
                                    outlined dense
                            ></v-text-field>
                        </v-col>
                        <v-col>
                            <v-select
                                    label="Type"
                                    v-model="newVariable.valueType"
                                    :items="typeList"
                                    outlined dense
                            ></v-select>
                        </v-col>
                    </v-row>
                    <div v-if="newVariable.valueType == 'Single Value (Scalar)'">
                        <v-text-field
                                label="Value"
                                v-model="newValue"
                                outlined dense
                        ></v-text-field>
                    </div>
                    <div v-if="newVariable.valueType == 'List'">
                        <v-btn
                                @click="addValue"
                                text
                                class="mb-2 d-flex ml-auto"
                        >
                            <v-icon>mdi-plus</v-icon>
                            Add value
                        </v-btn>
                        <div v-for="(item, index) in newValue" 
                                :key="'list_'+index"
                        >
                            <v-text-field
                                    label="Value"
                                    v-model="newValue[index].value"
                                    outlined dense
                            ></v-text-field>
                        </div>
                    </div>
                    <div v-if="newVariable.valueType == 'Dictionary'">
                        <v-btn
                                @click="addValue"
                                text
                                class="mb-2 d-flex ml-auto"
                        >
                            <v-icon>mdi-plus</v-icon>
                            Add value
                        </v-btn>
                        <v-row v-for="(item, index) in newValue" 
                                :key="'dict_'+index"
                        >
                            <v-col>
                                <v-text-field
                                        label="Key"
                                        v-model="newValue[index].key"
                                        outlined dense
                                ></v-text-field>
                            </v-col>
                            <v-col>
                                <v-text-field
                                        label="Value"
                                        v-model="newValue[index].value"
                                        outlined dense
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </div>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn @click="closeVariableForm"
                            text
                            color="red"
                    >
                        Cancel
                    </v-btn>
                    <v-btn @click="updateVariable(editVarIndex)"
                            text
                            color="success"
                    >
                        {{ isNewVar ? 'Add' : 'Edit' }}
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop, Watch } from "vue-property-decorator"
    import { Variable } from  "@/types/Task";
    import { Variables } from "@/types/Variables";
    
    @Component
    export default class VariablesDialog extends Vue {
        @Prop() value!: any

        // Data
        public varList: Variables = new Variables()
        public globalVariables: any[] = []
        public variableForm: boolean = false
        public newVariable: any = {
            name: "",
            valueType: "Single Value (Scalar)",
        }
        public newValue: any = null
        public isNewVar: boolean = true
        public editVarIndex: number = -1
        public typeList: string[] = [ "Single Value (Scalar)", "List", "Dictionary" ]


        mounted() {
            this.globalVariables.push({
                name: 'Global', 
                list: this.varList.getGlobalVariables()
            })
        }

        get variables() {
            var list: any[] = [{ name: 'Suite', list: [] }]
            if (this.value.variables.length > 0) {
                this.value.variables.forEach((item: any) => {
                    list[0].list.push(item)
                })
            }
            return list
        }

        @Watch("newVariable.valueType", {immediate: true, deep: true})
        changeType(newVal: string, oldVal: string) {
            if (this.isNewVar && newVal != oldVal) {
                if (newVal == "Single Value (Scalar)") {
                    this.newValue = ""
                } else if (newVal == "List") {
                    this.newValue = [{
                        value: ""
                    }]
                } else if (newVal == "Dictionary") {
                    this.newValue = [{
                        key: "",
                        value: ""
                    }]
                }
            }
        }

        // Methods
        openVariableForm() {
            this.isNewVar = true
            this.newVariable.name = ""
            this.newVariable.valueType = "Single Value (Scalar)"
            this.newValue = null

            this.variableForm = true
        }
        closeVariableForm() {
            this.variableForm = false

            if (this.isNewVar) {
                this.newVariable.name = ""
                this.newVariable.valueType = "Single Value (Scalar)"
                this.newValue = null
            }
        }

        updateVariable(index: number) {
            if (this.isNewVar && this.newVariable.name != "" && this.newValue) {
                this.value.variables.push(
                    new Variable(this.newVariable.name, this.newVariable.valueType, this.newValue)
                )
            } else {
                if(index >= 0) {
                    this.newVariable.defaultValue = this.newValue
                    this.value.variables[index] = this.newVariable
                }
            }

            this.newVariable = {
                name: "",
                valueType: "Single Value (Scalar)",
            }
            this.variableForm = false
            this.isNewVar = true
            this.newValue = null
        }

        modifyVariable(variable: any, index: number) {
            this.isNewVar = false
            this.editVarIndex = index
            this.newVariable = variable
            this.newValue = variable.defaultValue

            this.variableForm = true
        }

        deleteVariable(index: number) {
            this.value.variables.splice(index, 1)
        }

        addValue() {
            if (this.newVariable.valueType == "List") {
                this.newValue.push({ value: "" })

            } else if (this.newVariable.valueType == "Dictionary") {
                this.newValue.push({
                    key: "",
                    value: ""
                })
            }
        }
    }
</script>

<style scoped>

</style>