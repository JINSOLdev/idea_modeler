<template>
    <div>
        <v-card v-for="(condition, index) in conditions"
                :key="index"
                outlined
                :class="condition.type ? '': 'my-2'"
        >
            <v-card-title 
                    v-if="condition.type && condition.type != 'Else'" 
                    class="d-flex"
            >
                <div class="subtitle-1 mr-auto">
                    {{ condition.type }} Condition
                </div>
                <div v-if="condition.type != 'If'">
                    <v-btn icon @click="delCondition(index, conditions)">
                        <v-icon>mdi-delete-outline</v-icon>
                    </v-btn>
                </div>
            </v-card-title>
            
            <v-card-text v-if="condition.type != 'Else'">
                <div v-if="condition.terms && condition.terms.length > 0">
                    <div v-if="condition.terms.length > 1" class="d-flex mb-2">
                        <v-btn-toggle
                                v-model="condition.isAll"
                                rounded
                                dense
                                color="primary"
                                class="mr-auto"
                        >
                            <v-btn> All (AND) </v-btn>
                            <v-btn> Any (OR) </v-btn>
                        </v-btn-toggle>
                        <v-btn @click="delCondition(index, conditions)" icon>
                            <v-icon>mdi-delete-outline</v-icon>
                        </v-btn>
                    </div>

                    <div v-for="(item, idx) in condition.terms" :key="index+'_'+idx"
                            :class="item.isNot ? 
                                'v-card v-sheet v-sheet--outlined theme--light pa-3 my-2' : ''"
                    >
                        <v-chip v-if="item.isNot"
                                dense outlined
                                color="orange"
                                class="mb-2"
                        > Not </v-chip>
                        <div v-if="item.hasOwnProperty('variable') && item.operator != null"
                                class="d-flex"
                                style="height: 50px;"
                        >
                            <variables-field
                                    :value.sync="item.variable"
                            ></variables-field>

                            <v-select
                                    v-model="item.operator"
                                    :items="operatorList"
                                    dense
                                    outlined
                                    class="mx-1 pt-1"
                                    style="width: 100px;"
                            ></v-select>

                            <variables-field
                                    :value.sync="item.compareVariable"
                            ></variables-field>

                            <v-menu
                                    absolute
                                    offset-y
                            >
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn v-bind="attrs"
                                            v-on="on"
                                            icon
                                            class="mx-1 my-2"
                                    >
                                        <v-icon>mdi-dots-horizontal</v-icon>
                                    </v-btn>
                                </template>

                                <v-list>
                                    <v-list-item v-for="menu in editMenuList"
                                            :key="menu"
                                            link
                                            @click="selectFunction(item, menu)"
                                    >
                                        <v-list-item-title>{{ menu }}</v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                            <v-btn @click="deleteTerm(condition.terms, idx)"
                                    icon class="my-2"
                            >
                                <v-icon>mdi-delete-outline</v-icon>
                            </v-btn>
                        </div>

                        <div v-else-if="editIndex == idx || item.hasOwnProperty('variable')"
                                class="d-flex"
                                style="height: 50px;"
                        >
                            <variables-field
                                    :value.sync="item.variable"
                            ></variables-field>

                            <v-btn @click="addOperator(item)"
                                    outlined
                                    color="grey darken-1"
                                    class="ml-1 mt-1 mr-auto px-1"
                                    style="min-width: 40px !important; width: 40px; height: 40px;"
                            >
                                <v-icon>mdi-plus</v-icon>
                            </v-btn>

                            <v-menu
                                    absolute
                                    offset-y
                            >
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn v-bind="attrs"
                                            v-on="on"
                                            icon
                                            class="mx-1 my-2"
                                    >
                                        <v-icon>mdi-dots-horizontal</v-icon>
                                    </v-btn>
                                </template>

                                <v-list>
                                    <v-list-item v-for="menu in editMenuList"
                                            :key="menu"
                                            link
                                            @click="selectFunction(item, menu)"
                                    >
                                        <v-list-item-title>{{ menu }}</v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                            <v-btn @click="deleteTerm(condition.terms, idx)"
                                    icon class="my-2"
                            >
                                <v-icon>mdi-delete-outline</v-icon>
                            </v-btn>
                        </div>

                        <conditions-field
                                :value.sync="item.terms"
                                :isGroup="item.isGroup"
                        ></conditions-field>
                    </div>
                </div>

                <v-menu
                        absolute
                        offset-y
                >
                    <template v-slot:activator="{ on, attrs }">
                         <v-btn v-bind="attrs"
                                v-on="on"
                                outlined
                                color="grey darken-1"
                                class="mt-2"
                                style="min-width: 30px !important; width: 30px; height: 30px;"
                        >
                            <v-icon>mdi-plus</v-icon>
                        </v-btn>
                    </template>

                    <v-list>
                        <v-list-item v-for="menu in addMenuList"
                                :key="menu"
                                link
                                @click="selectFunction(condition, menu)"
                        >
                            <v-list-item-title>{{ menu }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-card-text>
        </v-card>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from "vue-property-decorator"
    import { Variables } from  "@/types/Variables";

    @Component
    export default class ConditionsField extends Vue {
        @Prop() public value!: any
        @Prop() public isGroup!: any

        public conditions: any = this.value
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
        public addMenuList: any[] = [
            "Add Condition",
            "Add Group Condition"
        ]
        public editMenuList: any[] = [
            "Negate",
            "Clear Condition"
        ]

        get hasElse() {
            var elseIdx = this.conditions.findIndex((item: any) => item.type == 'Else')
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

        delCondition(index: number, list: any) {
            var item = list[index]
            var type = item.type
            
            list.splice(index, 1)

            if (type == "If") {
                list.push({
                    type: 'If',
                    operator: '',
                    child: [],
                    terms: [{
                        variable: "",
                        terms: null,
                    }]
                })
            } else if (type == "While") {
                list.push({
                    type: 'While',
                    operator: '',
                    terms: [{
                        variable: "",
                        terms: null,
                    }]
                })
            }
        }

        addOperator(item: any) {
            this.$set(item, "operator", "==")
            this.$set(item, "compareVariable", "")
        }

        selectFunction(item: any, type: string) {
            if (type.includes("Add")) {
                this.addChildCondition(item, type)
            } else if (type == "Negate") {
                this.negateCondition(item)
            } else if (type == "Clear Condition") {
                this.clearCondition(item)
            }
        }

        addChildCondition(item: any, type: string) {
            var obj: any = null

            if (!item.terms) {
                item.terms = []

                if (item.type) {
                    obj = JSON.parse(JSON.stringify(item))
                    delete obj.type
                    if (item.child) {
                        delete obj.child
                    }
                    item.terms.push(obj)
                }
            }

            if (type.includes("Group")) {
                if (item.terms.length > 1) {
                    item.terms.push({
                        isGroup: true,
                        terms: [
                            {
                                isAll: 0,
                                terms: [
                                    {
                                        variable: "",
                                        terms: []
                                    },
                                    {
                                        variable: "",
                                        terms: []
                                    },
                                ]
                            },
                        ]
                    })
                } else {
                    item.terms.push({
                        variable: "",
                        terms: []
                    })
                }

            } else {
                if (item.terms.length > 0 && !item.hasOwnProperty("isAll")) {
                    item.isAll = 0
                }

                item.terms.push({
                    variable: "",
                    terms: []
                })

            }
        }

        deleteTerm(list: any, index: number) {
            if (list.length > 1 || this.isGroup) {
                list.splice(index, 1)
            } else {
                this.$delete(list[index], "operator")
                this.$delete(list[index], "compareVariable")
            }
        }

        negateCondition(item: any) {
            if (!item.isNot) {
                this.$set(item, "isNot", true)
            } else {
                this.$set(item, "isNot", false)
            }
        }

        clearCondition(item: any) {
            this.$set(item, "variable", null)
            
            if (item.operator) {
                this.$delete(item, "operator")
            }
            if (item.compareVariable) {
                this.$delete(item, "compareVariable")
            }
            if (item.isNot) {
                this.$set(item, "isNot", false)
            }
        }

    }
</script>