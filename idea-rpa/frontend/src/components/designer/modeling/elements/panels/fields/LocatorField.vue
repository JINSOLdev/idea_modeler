<template>
    <!--
        TODO: 1. 변수 할당 필요함. UI만 작업 하였음.
        TODO: 2. Locator를 Task단위로 등록하여 사용 할 수 있도록.
    -->
    <div class="mb-2">
        <div class="ml-2">
            Locator
        </div>
        <v-row class="my-1">
            <v-col cols="10" class="pr-0">
                <open-child-browser
                        v-if="!editMode && valueText == ''"
                        :records.sync="locator"
                        @closeLocator="closeLocator"
                ></open-child-browser>
                <v-text-field
                        v-else
                        v-model="valueText"
                        outlined
                        dense
                        hide-details="false"
                        clearable
                ></v-text-field>
            </v-col>
            
            <v-col cols="2">
                <v-tooltip bottom v-if="!editMode">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            @click="editMode = !editMode" 
                            v-bind="attrs"
                            v-on="on"
                            color="primary"
                            outlined
                        >
                            <v-icon>mdi-unfold-more-vertical</v-icon>
                        </v-btn>
                    </template>
                    <span>Edit as code</span>
                </v-tooltip>
                
                <v-tooltip bottom v-else>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn 
                                @click="editMode = !editMode" 
                                v-bind="attrs"
                                v-on="on"
                                outlined
                        >
                            <v-icon>mdi-view-headline</v-icon>
                        </v-btn>
                    </template>
                    <span>Select from list</span>
                </v-tooltip>
            </v-col>
        </v-row>

        <v-dialog v-model="openSelectLocator">
            <v-card>
                <v-card-title>
                    Select a Locator
                </v-card-title>
                <v-card-text>
                    <v-list>
                        <v-list-item-group
                                v-model="selLocator"
                        >
                            <v-list-item
                                    v-for="item in locator"
                                    :key="item.id"
                            >
                                <v-list-item-title v-if="item.id">
                                        id: {{ item.id }}
                                </v-list-item-title>
                                <v-list-item-title v-else-if="item.class">
                                        css: {{ item.class }}
                                </v-list-item-title>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn @click="openSelectLocator = false"
                            outlined
                            color="red"
                    >
                        close
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>


<script lang="ts">
    import { Vue, Component, Prop, Watch } from "vue-property-decorator";
    import OpenChildBrowser from "../../util/OpenChildBrowser.vue";

    @Component({components: {
        OpenChildBrowser
    }})
    
    export default class LocatorField extends Vue {
        @Prop() public value!: any
        @Prop() public rules!: any[]
        @Prop() public label!: string
        @Prop() public hint!: string
        
        
        locator: any[] = []
        varItems: any[] = []
        newValue: any = {
            id: "",
            class: "",
            ref: "",
            valueType: "Locator"
        }
        editMode: Boolean = false
        openSelectLocator: Boolean = false
        selLocator: any = null
        

        @Watch('selLocator')
        selectedLocator(val: number) {
            if(val > -1) {
                this.newValue = this.locator[val]
            }
        }
        
        get valueText() {
            var text = ""
            if (this.newValue) {
                if (this.newValue.id) {
                    text =  "id:" + this.newValue.id
                } else if (this.newValue.class) {
                    text = "class:" + this.newValue.class
                } else {
                    text = this.newValue.ref
                }
            }
            return text
        }
        set valueText(newVal: string) {
            if (newVal && newVal.length > 0) {
                this.newValue.ref = newVal
            } else {
                this.newValue = null
            }
        }

        mounted() {
            if (this.value) {
                this.newValue = this.value
            }
        }

        destroyed() {
            this.updateValue()
        }

        // Methods
        updateValue() {
            this.$emit('update:value', this.newValue)
        }

        closeLocator() {
            this.openSelectLocator = true
        }

        capitalize(word: string) {
            return word.charAt(0).toUpperCase() + word.slice(1)
        }
    }
</script>