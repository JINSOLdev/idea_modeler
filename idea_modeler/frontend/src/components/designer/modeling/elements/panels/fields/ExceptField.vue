<template>
    <v-card outlined>
        <v-card-title class="subtitle-1 d-flex">
            <div class="mr-auto">Exceptions</div>
            <v-btn icon @click="addExcept">
                <v-icon>mdi-plus</v-icon>
            </v-btn>
        </v-card-title>

        <v-card-text v-if="typeof value == 'object'">
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
            <span v-if="value.length == 0">
                No except patterns set
            </span>
            
            <v-row v-for="(val, idx) in value" 
                    :key="val+idx"
                    style="max-height: 70px;"
            >
                <v-col>
                    <v-autocomplete
                            v-model="value[idx]"
                            :items="varItems"
                            item-disabled="disabled"
                            persistent-hint
                            outlined
                            dense
                    ></v-autocomplete>
                </v-col>
                <v-col cols="1" style="padding: 12px 0px;">
                    <v-btn icon @click="delValue(idx)">
                        <v-icon>mdi-delete-outline</v-icon>
                    </v-btn>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from "vue-property-decorator";
    import { Variables } from  "@/types/Variables";

    @Component
    export default class ExceptField extends Vue {
        @Prop() public value!: any

        varItems: any[] = []

        mounted() {
            var variables = new Variables()
            this.varItems = variables.getVarList()

            if (this.value.length == 0) {
                this.value = null
            }
        }

        addExcept() {
            this.value = []
        }

        delExcept() {
            this.$emit('delExcept')
        }

        addValue() {
            var lastIdx = this.value.length - 1
            if (lastIdx == -1 || (lastIdx >= 0 && this.value[lastIdx] != "")) {
                this.value.push("")
            }
        }

        delValue(idx: number) {
            this.value.splice(idx, 1)
        }
    }
</script>