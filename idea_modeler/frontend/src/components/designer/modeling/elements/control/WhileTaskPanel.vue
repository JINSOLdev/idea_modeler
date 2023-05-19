<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                While Condition
            </v-card-title>
            
            <v-card-text>
                <v-row>
                    <v-col :cols="isOperator ? 4 : 6">
                        <v-autocomplete
                                v-model="value.condition.variable"
                                :items="varItems"
                                dense
                        ></v-autocomplete>
                    </v-col>
                    <v-col v-if="!isOperator" cols="1">
                        <v-btn @click="addOperator"
                                outlined small
                        >
                            <v-icon>mdi-plus</v-icon>
                        </v-btn>
                    </v-col>
                    <v-col v-else cols="2">
                        <v-select
                                v-model="value.condition.operator"
                                :items="operatorList"
                                dense
                        ></v-select>
                    </v-col>
                    <v-col v-if="isOperator" cols="4">
                        <v-select
                                v-model="value.condition.compareVariable"
                                :items="varItems"
                                dense
                        ></v-select>
                    </v-col>
                    <v-col v-if="isOperator" cols="1">
                        <v-btn @click="deleteOperator"
                                icon small
                        >
                            <v-icon>mdi-delete-outline</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
        <v-card outlined>
            <v-card-subtitle>
                Limit
            </v-card-subtitle>
            <v-card-text>
                <v-text-field
                        v-model="value.limit"
                ></v-text-field>
            </v-card-text>
        </v-card>
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

    export default class WhileTaskPanel extends Mixins(ControlPanel) {
        public varItems: any[] = []
        public isOperator: boolean = false
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

        mounted() {
            var variables = new Variables()
            this.varItems = variables.getVarList()
            
            if(this.value.condition.operator) {
                this.isOperator = true
            }
        }

        addOperator() {
            this.isOperator = true
            this.value.condition.operator = '=='
            this.value.condition.compareVariable = ''
        }

        deleteOperator() {
            this.isOperator = false
            delete this.value.condition.operator
            delete this.value.condition.compareVariable
        }
    }
</script>