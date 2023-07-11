<template>
    <div>
        <conditions-field
                :value.sync="value.property.conditions"
        ></conditions-field>

        <v-card outlined>
            <v-card-subtitle>
                Limit
            </v-card-subtitle>
            <v-card-text class="pb-0">
                <v-text-field
                        v-model="value.property.limit"
                        placeholder="Not set"
                        hint="Iteration limit as count or time string"
                        persistent-hint
                        outlined
                        dense
                ></v-text-field>
            </v-card-text>
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

    export default class WhileTaskPanel extends Mixins(ControlPanel) {
        mounted() {
            var description = "Repeat the same action while a condition is met"
            this.$emit("setDescription", description)
        }

        destroyed() {
            this.value.property.conditions.forEach((item: any) => {
                if (item.terms && item.terms.length > 0) {
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
    }
</script>