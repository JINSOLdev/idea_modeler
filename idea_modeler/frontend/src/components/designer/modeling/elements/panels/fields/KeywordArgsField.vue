<template>
    <div class="kwargs-field">
        <div class="d-flex">
            <div class="mr-auto ml-2">
                {{ label }}
            </div>
            <v-btn icon @click="addValue">
                <v-icon>mdi-plus</v-icon>
            </v-btn>
        </div>

        <v-row v-for="(val, idx) in newValue"
                :key="val+idx"
                style="max-height: 70px;"
        >
            <v-col class="pr-0">
                <v-text-field
                        v-model="newValue[idx].key"
                        outlined
                        dense
                ></v-text-field>
            </v-col>
            <v-col>
                <variables-field
                        :value.sync="newValue[idx].value"
                ></variables-field>
            </v-col>
            <v-col cols="1" style="padding: 12px 0px;">
                <v-btn icon @click="delValue(idx)">
                    <v-icon>mdi-delete-outline</v-icon>
                </v-btn>
            </v-col>
        </v-row>
    </div>
</template>


<script lang="ts">
    import { Vue, Component, Prop } from "vue-property-decorator";

    @Component
    export default class KeywordArgsField extends Vue {
        @Prop() public value!: any[]
        @Prop() public label!: string
        
        newValue: any[] = []

        mounted() {
            if(!this.value || this.value.length < 1) {
                this.newValue = [{
                    key: "",
                    value: "",
                }]
            } else {
                this.newValue = this.value
            }
        }

        destroyed() {
            this.updateValue()
        }

        // Methods
        updateValue() {
            var lastIdx = this.newValue.length - 1
            if (lastIdx >= 0 && this.newValue[lastIdx].key != "") {
                this.$emit('update:value', this.newValue)
            }
        }

        addValue() {
            var lastIdx = this.newValue.length - 1
            if (lastIdx == -1 || (lastIdx >= 0 && this.newValue[lastIdx].key != "")) {
                this.newValue.push({
                    key: "key",
                    value: ""
                })
            }
        }

        delValue(idx: number) {
            this.newValue.splice(idx, 1)
            this.updateValue()
        }
    }
</script>

<style scoped>

    .kwargs-field {
        margin-top: 24px;
    }
</style>