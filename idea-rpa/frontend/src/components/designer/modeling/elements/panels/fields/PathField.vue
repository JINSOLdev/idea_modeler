<template>
    <div>
        <div class="d-flex mb-1">
            <div class="mr-auto ml-2">{{ label }}</div>
            <div v-if="required" class="mr-1"> required </div>
        </div>
        <v-text-field
                v-model="newValue"
                :hint="hint"
                persistent-hint
                outlined
                dense
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

        public newValue: any = null
        public rules: any = {
            required: (value: any) => !!value || 'Required.',
        }

        mounted() {
            this.newValue = this.value
        }

        destroyed() {
            this.updateValue()
        }

        // Methods
        updateValue() {
            this.$emit('update:value', this.newValue)
        }

        openFileDialog() {
            let me = this
            var properties: any[] = []
            
            if (this.isDir) {
                properties = ['openDirectory']
            } else {
                properties = ['openFile']
            }
            
            dialog.showOpenDialog({
                properties
            }).then(result => {
                
                me.newValue = result.filePaths.shift()
            
            }).catch(err => {
                console.log(err)

            });
        }
    }
</script>