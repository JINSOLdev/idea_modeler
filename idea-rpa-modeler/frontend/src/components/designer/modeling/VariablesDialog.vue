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
                ></v-treeview>
                <v-treeview
                        :items="variables"
                        item-key="name"
                        item-children="list"
                        open-on-click
                >
                    <template v-slot:append="{ item, index }">
                        <div v-if="!item.list">
                            <v-btn x-small icon @click="modifyVariable(item, index)">
                                <v-icon>
                                    {{ 'mdi-pencil-outline' }}
                                </v-icon>
                            </v-btn>
                            <v-btn x-small icon @click="deleteVariable(item)">
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
                <v-btn color="primary" outlined
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
                    <v-text-field
                            label="Variable Name"
                            v-model="newVariable.name"
                    ></v-text-field>
                    <v-text-field
                            label="Default Value"
                            v-model="newVariable.defaultValue"
                    ></v-text-field>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="error" outlined
                            @click="variableForm = false"
                    >
                        Cancel
                    </v-btn>
                    <v-btn color="primary" outlined
                            @click="updateVariable(editVarIndex)"
                    >
                        {{ isNewVar ? 'Add' : 'Edit' }}
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from "vue-property-decorator"
    import { Variable } from  "@/types/Task";
    import { Variables } from  "@/types/Variables";
    
    @Component
    export default class VariablesDialog extends Vue {
        @Prop() value!: any

        // Data
        public varList: Variables = new Variables()
        // public variables: any[] = [{ name: 'Suite', list: [] }]
        public globalVariables: any[] = [{ name: 'Global', list: [] }]
        public variableForm: boolean = false
        public newVariable: any = {
            name: '',
            defaultValue: '',
        }
        public isNewVar: boolean = true
        public editVarIndex: number = -1

        // Mounted
        mounted() {
            this.varList.getGlobalVariables().forEach((item: string) => {
                this.globalVariables[0].list.push({
                    name: item
                })
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

        // Methods
        openVariableForm() {
            this.variableForm = true
        }

        updateVariable(index: number) {
            if (this.isNewVar) {
                this.value.variables.push(
                    new Variable(this.newVariable.name, this.newVariable.defaultValue)
                )
            } else {
                if(index >= 0) {
                    this.value.variables[index] = this.newVariable
                }
            }

            this.newVariable = {
                name: '',
                defaultValue: '',
            }
            this.variableForm = false
            this.isNewVar = true
        }

        modifyVariable(variable: any, index: number) {
            this.isNewVar = false
            this.editVarIndex = index
            this.newVariable = variable
            this.openVariableForm()
        }

        deleteVariable(variable: any) {
            var newVars = this.value.variables.filter((vars: any) => vars.name != variable.name)
            this.value.variables = newVars
        }
    }
</script>

<style scoped>

</style>