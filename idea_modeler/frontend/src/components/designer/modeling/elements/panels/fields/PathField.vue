<template>
    <div>
        <v-card flat>
            <v-text-field
                    v-model="newValue"
                    :label="label"
                    :hint="hint"
                    outlined
                    dense
                    append-icon="mdi-folder-outline"
            ></v-text-field>
        </v-card>
    </div>
</template>


<script lang="ts">
    import { Vue, Component, Prop, Watch } from "vue-property-decorator";

    @Component
    export default class PathExplorer extends Vue {
        @Prop() public value!: any
        @Prop() public label!: string
        @Prop() public hint!: string

        public newValue: any = null

        mounted() {
            this.newValue = this.value
        }

        destroyed() {
            this.updateValue()
        }

        // Watch
        @Watch("newValue", {immediate: true, deep: true})
        change(val: any) {
            if (val) {
            }
        }

        // Methods
        updateValue() {
            this.$emit('update:value', this.newValue)
        }
    }
</script>