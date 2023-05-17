<template>
    <div>
        <v-card v-for="(condition, index) in value.conditions"
                :key="index"
                flat
        >
            <v-card-title v-if="condition.type != 'Else'" class="d-flex">
                <div class="subtitle-1 mr-auto">
                    {{ condition.type }} Condition
                </div>
                <div v-if="condition.type != 'If'">
                    <v-btn icon @click="delCondition(index)">
                        <v-icon>mdi-delete-outline</v-icon>
                    </v-btn>
                </div>
            </v-card-title>
            
            <v-card-text v-if="condition.type != 'Else'">
                <div></div>
                <v-row>
                    <v-col :cols="editIndex == index || condition.operator != null ? 4 : 6">
                        <v-autocomplete
                                v-model="condition.variable"
                                :items="varItems"
                                dense
                        ></v-autocomplete>
                    </v-col>
                    <v-col v-if="condition.type != 'Else' && editIndex != index && condition.operator == null"
                            cols="1"
                    >
                        <v-btn @click="addOperator(index)"
                                outlined small
                        >
                            <v-icon>mdi-plus</v-icon>
                        </v-btn>
                    </v-col>
                    <v-col v-if="editIndex == index || condition.operator != null"
                            cols="2"
                    >
                        <v-select
                                v-model="condition.operator"
                                :items="operatorList"
                                dense
                        ></v-select>
                    </v-col>
                    <v-col v-if="editIndex == index || condition.operator != null"
                            cols="4"
                    >
                        <v-autocomplete
                                v-model="condition.compareVariable"
                                :items="varItems"
                                dense
                        ></v-autocomplete>
                    </v-col>
                    <v-col v-if="editIndex == index || condition.operator != null"
                            cols="1"
                    >
                        <v-btn @click="deleteOperator(index)"
                                icon small
                        >
                            <v-icon>mdi-delete-outline</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
                <v-divider></v-divider>
            </v-card-text>
        </v-card>

        <div>
            <v-btn outlined small class="mx-4"
                    @click="addCondition('Else If')"
            >
                + Else If
            </v-btn>
            <v-btn outlined small :color="hasElse ? 'primary' : ''"
                    @click="addCondition('Else')"
            >
                Else
            </v-btn>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import ControlPanel from "../panels/ControlPanel.vue";
    import { Variables } from  "@/types/Variables";

    @Component({
        components: {
            ControlPanel,
        }
    })

    export default class IfTaskPanel extends Mixins(ControlPanel) {
        public varItems: any[] = []
        public editIndex: any = null
        public operatorList: any[] = [
            '==',
            '!=',
            '>',
            '>=',
            '<',
            '<=',
            'is',
            'is not',
        ]

        get hasElse() {
            var elseIdx = this.value.conditions.findIndex((item: any) => item.type == 'Else')
            if (elseIdx > -1) {
                return true
            } else {
                return false
            }
        }

        mounted() {
            var variables = new Variables()
            this.varItems = variables.getVarList()
        }

        addCondition(type: any) {
            if (type == 'Else If') {
                this.value.conditions.push({
                    type: 'Else If',
                    variable: '',
                    keywords: []
                })
            } else if (type == 'Else') {
                if (!this.hasElse) {
                    this.value.conditions.push({
                        type: 'Else',
                        keywords: []
                    })
                } else {
                    this.value.conditions = this.value.conditions.filter((item: any) => item.type != 'Else')
                }
            }
        }

        delCondition(index: number) {
            this.value.conditions.splice(index, 1)
        }

        addOperator(index: number) {
            this.editIndex = index
            this.value.conditions[index]['operator'] = '=='
            this.value.conditions[index]['compareVariable'] = ''
            
        }
        deleteOperator(index: number) {
            this.editIndex = null
            delete this.value.conditions[index].operator
            delete this.value.conditions[index].compareVariable
        }

    }
</script>