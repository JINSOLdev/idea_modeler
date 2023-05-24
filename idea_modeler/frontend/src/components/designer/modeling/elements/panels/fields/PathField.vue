<template>
    <div>
<<<<<<< HEAD
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
=======
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
>>>>>>> 0519
    </div>
</template>


<script lang="ts">
    import { Vue, Component, Prop, Watch } from "vue-property-decorator";
<<<<<<< HEAD
    const { dialog } = require('electron').remote;

    
=======

>>>>>>> 0519
    @Component
    export default class PathExplorer extends Vue {
        @Prop() public value!: any
        @Prop() public label!: string
        @Prop() public hint!: string
<<<<<<< HEAD
        @Prop() public isDir!: boolean
        @Prop() public required!: boolean

        public newValue: any = null
        public rules: any = {
            required: (value: any) => !!value || 'Required.',
        }
=======

        public newValue: any = null
>>>>>>> 0519

        mounted() {
            this.newValue = this.value
        }

        destroyed() {
            this.updateValue()
        }

<<<<<<< HEAD
=======
        // Watch
        @Watch("newValue", {immediate: true, deep: true})
        change(val: any) {
            if (val) {
            }
        }

>>>>>>> 0519
        // Methods
        updateValue() {
            this.$emit('update:value', this.newValue)
        }
<<<<<<< HEAD

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
=======
>>>>>>> 0519
    }
</script>