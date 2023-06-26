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

        <div v-for="(val, idx) in newValue"
                :key="val+idx"
                class="d-flex"
        >
            <v-text-field
                    v-model="newValue[idx].key"
                    outlined
                    dense
                    class="mr-2"
            ></v-text-field>

            <variables-field
                    :value.sync="newValue[idx].value"
            ></variables-field>
            
            <v-btn @click="delValue(idx)"
                    icon
                    class="ml-2"
            >
                <v-icon>mdi-delete-outline</v-icon>
            </v-btn>
        </div>
    </div>
</template>


<script lang="ts">
    import { Vue, Component, Prop } from "vue-property-decorator";

    @Component
    export default class KeywordArgsField extends Vue {
        @Prop() public value!: any[]
        @Prop() public label!: string
        
        public newValue: any[] = []

        mounted() {
            if(!this.value || this.value.length < 1) {
                this.$set(this, "newValue", [{
                    key: "",
                    value: "",
                }])
            } else {
                this.$set(this, "newValue", this.value)
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