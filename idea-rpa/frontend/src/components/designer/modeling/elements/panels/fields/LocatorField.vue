<template>
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
            name: "",
            valueType: "locator",
            defaultValue: "",
        }
        editMode: Boolean = false
        openSelectLocator: Boolean = false
        selLocator: any = null
        

        @Watch('selLocator')
        selectedLocator(val: number) {
            if(val > -1) {
                if (this.locator[val].id != "" && this.locator[val].id != null && this.locator[val].id != undefined) {
                    this.newValue = {
                        name: "id",
                        valueType: "locator",
                        defaultValue: this.locator[val].id,
                    }
                } else if (this.locator[val].class != "" && this.locator[val].class != null && this.locator[val].class != undefined) {
                    this.newValue = {
                        name: "class",
                        valueType: "locator",
                        defaultValue: this.locator[val].class,
                    }
                } else {
                    this.newValue = {
                        name: "ref",
                        valueType: "locator",
                        defaultValue: this.locator[val].ref,
                    }
                }
            }
        }
        
        get valueText() {
            var text = ""
            if (this.newValue && this.newValue.name) {
                if (this.newValue.name != "ref") {
                    text = this.newValue.name + ":" + this.newValue.defaultValue
                } else {
                    text = this.newValue.defaultValue
                }
            }
            return text
        }
        set valueText(newVal: string) {
            if (newVal && newVal.length > 0) {
                this.newValue.name = "ref"
                this.newValue.defaultValue = newVal
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