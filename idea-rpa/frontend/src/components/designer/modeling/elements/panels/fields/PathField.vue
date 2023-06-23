<template>
    <div>
        <div class="d-flex mb-1">
            <div class="mr-auto ml-2">{{ label }}</div>
            <div v-if="required" class="mr-1"> required </div>
        </div>
        <v-text-field
                v-model="newValue.defaultValue"
                :hint="hint"
                persistent-hint
                outlined
                dense
                @keydown="updateValue"
        >
            <template v-slot:append>
                <v-icon @click="openFileDialog">
                    mdi-folder-outline
                </v-icon>
            </template>
        </v-text-field>
    </div>
</template>


<script lang="ts">
    import { Vue, Component, Prop, Watch } from "vue-property-decorator";
    const { dialog } = require('electron').remote;

    
    @Component
    export default class PathExplorer extends Vue {
        @Prop() public value!: any
        @Prop() public label!: string
        @Prop() public hint!: string
        @Prop() public isDir!: boolean
        @Prop() public required!: boolean

        public newValue: any = {
            name: "path",
            valueType: "Path",
            defaultValue: "",
            required: this.required ? this.required : false,
        }
        public rules: any = {
            required: (value: any) => !!value || 'Required.',
        }

        mounted() {
            if (this.value && this.value != null && this.value != undefined) {
                if (typeof this.value == 'string') {
                    this.newValue = {
                        name: "path",
                        valueType: "Path",
                        defaultValue: this.value,
                    }
                } else {
                    this.newValue = this.value
                }
            }
        }

        destroyed() {
            this.updateValue()
        }

        // Methods
        updateValue() {
            if (typeof this.newValue == 'string') {
                this.newValue = {
                    name: "path",
                    valueType: "Path",
                    defaultValue: this.newValue,
                }
            }

            this.$emit('update:value', this.newValue)
        }

        openFileDialog() {
            let me = this
            var properties: any = []
            
            if (this.isDir) {
                properties = ["openDirectory"]
            } else {
                properties = ["openFile", "promptToCreate"]
            }
            
            dialog.showOpenDialog({
                defaultPath: me.newValue.defaultValue,
                properties
            }).then(result => {
                var path: any = result.filePaths.shift()
                me.newValue.defaultValue = path?.replace(/\\/g, "//")
            
            }).catch(err => {
                console.log(err)

            });
        }
    }
</script>