<template>
    <div class="d-flex">
        <v-switch
                v-model="newValue"
                :label="label"
                color="success"
                :hint="hint"
                persistent-hint
                class="py-0 mb-6 mr-auto"
        ></v-switch>
        <div v-if="required" class="mr-2">required</div>
    </div>
</template>


<script lang="ts">
    import { Vue, Component, Prop } from "vue-property-decorator";

    @Component
    export default class SwitchField extends Vue {
        @Prop() public value!: any
        @Prop() public label!: string
        @Prop() public hint!: string
        @Prop() public required!: boolean
        
        newValue: any = null

        mounted() {
            if (this.value) {
                this.newValue = this.value
            }
        }

        destroyed() {
            this.updateValue()
        }

        updateValue() {
            this.$emit('update:value', this.newValue)
        }

    }
</script>

<style scoped>

</style>