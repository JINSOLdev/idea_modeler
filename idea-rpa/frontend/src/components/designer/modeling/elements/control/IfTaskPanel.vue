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
        public hasElse: boolean = false
        
        mounted() {
            var res = this.value.property.conditions.some((item: any) => item.type == 'Else')
            this.$set(this, "hasElse", res)

            var description = "Run an action conditionally"
            this.$emit("setDescription", description)
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
                var lengthIndex = this.value.property.conditions.filter((item: any) => item.type == type).length
                this.value.property.conditions.push({
                    id: `elseIf_${++lengthIndex}`,
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
                        id: 'else',
                        type: 'Else',
                        child: []
                    })
                    this.$set(this, "hasElse", true)

                } else {
                    var newConditions = this.value.property.conditions.filter((item: any) => item.type != 'Else')
                    this.$set(this.value.property, "conditions", newConditions)
                    this.$set(this, "hasElse", false)
                }
            }

            this.$emit('update:value', this.value)
        }

        

    }
</script>