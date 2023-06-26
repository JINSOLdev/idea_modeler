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
                    <template v-slot:append="{ item }">
                        <div v-if="!item.list">
                            <v-btn @click="modifyVariable(item)"
                                    x-small
                                    icon
                            >
                                <v-icon>mdi-pencil-outline</v-icon>
                            </v-btn>
                            <v-btn @click="deleteVariable(item)"
                                    x-small 
                                    icon
                            >
                                <v-icon>mdi-delete-outline</v-icon>
                            </v-btn>
                        </div>
                    </template>
                </v-treeview>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="$emit('closeVariableDialog')"
                        color="red"
                        text
                >
                    Close
                </v-btn>
                <v-btn @click="openVariableForm"
                        color="success" 
                        text
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
                                    v-model="newValue.name"
                                    label="Variable Name"
                                    outlined
                                    dense
                            ></v-text-field>
                        </v-col>
                        <v-col>
                            <v-select
                                    v-model="newValue.valueType"
                                    label="Type"
                                    :items="typeList"
                                    outlined
                                    dense
                            ></v-select>
                        </v-col>
                    </v-row>
                    <div v-if="newValue.valueType == 'Single Value (Scalar)'">
                        <v-text-field
                                v-model="newValue.defaultValue"
                                label="Value"
                                outlined
                                dense
                        ></v-text-field>
                    </div>
                    <div v-if="newValue.valueType == 'List'">
                        <v-btn
                                @click="addValue"
                                text
                                class="mb-2 d-flex ml-auto"
                        >
                            <v-icon>mdi-plus</v-icon>
                            Add value
                        </v-btn>
                        <div v-for="(item, index) in newValue.defaultValue" 
                                :key="'list_'+index"
                        >
                            <v-text-field
                                    v-model="item.value"
                                    label="Value"
                                    outlined
                                    dense
                            ></v-text-field>
                        </div>
                    </div>
                    <div v-if="newValue.valueType == 'Dictionary'">
                        <v-btn
                                @click="addValue"
                                text
                                class="mb-2 d-flex ml-auto"
                        >
                            <v-icon>mdi-plus</v-icon>
                            Add value
                        </v-btn>
                        <v-row v-for="(item, index) in newValue.defaultValue" 
                                :key="'dict_'+index"
                        >
                            <v-col>
                                <v-text-field
                                        v-model="item.key"
                                        label="Key"
                                        outlined
                                        dense
                                ></v-text-field>
                            </v-col>
                            <v-col>
                                <v-text-field
                                        v-model="item.value"
                                        label="Value"
                                        outlined
                                        dense
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
                    <v-btn @click="updateVariable"
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
        public newValue: any = {
            name: "",
            valueType: "Single Value (Scalar)",
            defaultValue: null,
        }
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

        @Watch("newValue.valueType", {immediate: true, deep: true})
        changeType(newVal: string, oldVal: string) {
            if (this.isNewVar && newVal != oldVal) {
                if (newVal == "Single Value (Scalar)") {
                    this.$set(this.newValue, "defaultValue", "")

                } else if (newVal == "List") {
                    this.$set(this.newValue, "defaultValue", [{ value: "" }])

                } else if (newVal == "Dictionary") {
                    this.$set(this.newValue, "defaultValue", [{ key: "", value: "" }])

                }
            }
        }

        // Methods
        openVariableForm() {
            this.$set(this, "isNewVar", true)

            this.$set(this.newValue, "name", "")
            this.$set(this.newValue, "valueType", "Single Value (Scalar)")
            this.$set(this.newValue, "defaultValue", null)

            this.$set(this, "variableForm", true)
        }
        closeVariableForm() {
            this.$set(this, "variableForm", false)

            if (this.isNewVar) {
                this.$set(this.newValue, "name", "")
                this.$set(this.newValue, "valueType", "Single Value (Scalar)")
                this.$set(this.newValue, "defaultValue", null)
            }
        }

        updateVariable() {
            if (this.isNewVar && this.newValue.name != "" && this.newValue.defaultValue) {
                this.value.variables.push(
                    new Variable(this.newValue.name, this.newValue.valueType, this.newValue.defaultValue)
                )
            }

            var obj = {
                name: "",
                valueType: "Single Value (Scalar)",
                defaultValue: null
            }
            this.$set(this, "newValue", obj)
            this.$set(this, "isNewVar", true)
            this.$set(this, "editVarIndex", -1)
            this.$set(this, "variableForm", false)
        }

        modifyVariable(item: any) {
            this.$set(this, "newValue", item)
            this.$set(this, "isNewVar", false)
            this.$set(this, "variableForm", true)
        }

        deleteVariable(item: any) {
            var newVariables = this.value.variables.filter((variable: any) => !(
                variable.name === item.name &&
                variable.valueType === item.valueType &&
                variable.defaultValue === item.defaultValue

            ))
            this.$set(this.value, "variables", newVariables)
        }

        addValue() {
            if (this.newValue.valueType == "List") {
                this.newValue.defaultValue.push({ value: "" })

            } else if (this.newValue.valueType == "Dictionary") {
                this.newValue.defaultValue.push({
                    key: "",
                    value: ""
                })
            }
        }
    }
</script>

<style scoped>

</style>