<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1 d-flex">
                <div class="mr-auto">Exceptions</div>
                <v-btn icon @click="addExcept">
                    <v-icon>mdi-plus</v-icon>
                </v-btn>
            </v-card-title>

            <v-card-text v-if="getExcept">
                <div class="d-flex">
                    <div class="mr-auto ml-2">
                        Except
                    </div>
                    <v-btn icon @click="addValue">
                        <v-icon>mdi-plus</v-icon>
                    </v-btn>
                    <v-btn icon @click="delExcept">
                        <v-icon>mdi-delete-outline</v-icon>
                    </v-btn>
                </div>
                <span v-if="getExcept.length == 0">
                    No except patterns set
                </span>
                
                <v-row v-for="(val, idx) in getExcept" 
                        :key="val+idx"
                        style="max-height: 70px;"
                >
                    <v-col>
                        <v-combobox
                                v-model="value[idx]"
                                :items="varItems"
                                item-disabled="disabled"
                                persistent-hint
                                outlined
                                dense
                                @change="updateValue(value[idx], idx)"
                        ></v-combobox>
                    </v-col>
                    <v-col cols="1" style="padding: 12px 0px;">
                        <v-btn icon @click="delValue(idx)">
                            <v-icon>mdi-delete-outline</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>

        <v-card flat>
            <v-card-text>
                <v-switch
                        v-model="value.property.elseBranch"
                        label="Else Branch"
                        class="py-0"
                ></v-switch>

                <v-switch
                        v-model="value.property.finallyBranch"
                        label="Finally Branch"
                        class="py-0"
                ></v-switch>
            </v-card-text>
        </v-card>
    </div>
</template>

<script lang="ts">
    import { Component, Mixins, Watch } from "vue-property-decorator"
    import ControlPanel from "../panels/ControlPanel.vue";
    import { Variables } from  "@/types/Variables";

    @Component({
        components: {
            ControlPanel,
        }
    })

    export default class TryExceptTaskPanel extends Mixins(ControlPanel) {
        varItems: any[] = []
        getExcept: any = null

        mounted() {
            var variables = new Variables()
            this.varItems = variables.getVarList()

            if (this.value.property.hasOwnProperty('except')) {
                this.getExcept = this.value.property.except
            }
        }

        @Watch("getExcept", {immediate: true, deep: true})
        setExcept(val: any) {
            if (val) {
                this.value.property.except = val
            }
        }

        addExcept() {
            this.getExcept = []
        }

        delExcept() {
            this.getExcept = null
        }

        addValue() {
            var lastIdx = this.getExcept.length - 1
            if (lastIdx == -1 || (lastIdx >= 0 && this.getExcept[lastIdx] != "")) {
                this.getExcept.push("")
            }
        }

        updateValue(value: any, idx: number) {
            this.getExcept[idx] = value
        }

        delValue(idx: number) {
            this.getExcept.splice(idx, 1)
        }
    }
</script>