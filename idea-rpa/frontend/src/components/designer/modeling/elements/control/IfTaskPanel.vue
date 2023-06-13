<template>
    <div>
        <conditions-field
                :value.sync="value.property.conditions"
        ></conditions-field>

        <v-card flat class="mt-4">
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
        </v-card>
    </div>
</template>

<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import ControlPanel from "../panels/ControlPanel.vue";

    @Component({
        components: {
            ControlPanel,
        }
    })

    export default class IfTaskPanel extends Mixins(ControlPanel) {
        
        get hasElse() {
            var elseIdx = this.value.property.conditions.findIndex((item: any) => item.type == 'Else')
            if (elseIdx > -1) {
                return true
            } else {
                return false
            }
        }

        mounted() {
        }

        destroyed() {
            this.value.property.conditions.forEach((item: any) => {
                if (item.type != "Else" && item.terms && item.terms.length > 0) {
                    item.terms = this.validateTerms(item.terms)
                }
            })
        }

        validateTerms(terms: any): any {
            terms.forEach((item: any, index: number) => {
                if (item.hasOwnProperty('isGroup') && item.terms.length == 0) {
                    terms.splice(index, 1)
                }
            })
            return terms
        }

        addCondition(type: any) {
            if (type == 'Else If') {
                this.value.property.conditions.push({
                    type: 'Else If',
                    operator: '',
                    child: [],
                    terms: [{
                        variable: "",
                        terms: null,
                    }]
                })
            } else if (type == 'Else') {
                if (!this.hasElse) {
                    this.value.property.conditions.push({
                        type: 'Else',
                        child: []
                    })
                } else {
                    this.value.property.conditions = this.value.property.conditions.filter((item: any) => item.type != 'Else')
                }
            }
        }

    }
</script>