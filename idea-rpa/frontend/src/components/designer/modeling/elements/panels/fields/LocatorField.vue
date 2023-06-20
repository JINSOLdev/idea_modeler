<template>
    <div class="mb-2">
        <div class="d-flex">
            <div class="ml-2 mr-auto">Locator</div>
            <div v-if="required" class="mr-2">required</div>
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

        <v-dialog v-model="openSelectLocator" max-width="600">
            <v-card>
                <v-card-title>
                    Select a Locator
                </v-card-title>

                <v-card-text class="pb-0">
                    <v-radio-group v-model="selected">
                        <div v-for="(item, index) in locator"
                                :key="item.xpath"
                                class="d-flex"
                        >
                            <v-radio
                                    :value="index"
                                    class="mb-5"
                            ></v-radio>
                            <v-select
                                    v-model="valueText"
                                    :items="getList(item)"
                                    :disabled="selected != index"
                                    dense
                                    outlined
                            ></v-select>
                        </div>
                    </v-radio-group>
                </v-card-text>
                
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn @click="openSelectLocator=false; selected=-1;"
                            text
                            color="success"
                    >
                        Ok
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
        @Prop() public required!: boolean
        
        
        locator: any[] = []
        varItems: any[] = []
        newValue: any = {
            name: "locator",
            valueType: "locator",
            defaultValue: null,
        }
        editMode: boolean = false
        openSelectLocator: boolean = false
        selected: number = -1
        
        get valueText() {
            var text = ""
            if (this.newValue && this.newValue.defaultValue) {
                text = this.newValue.defaultValue
            }
            return text
        }
        set valueText(newVal: string) {
            if (newVal && newVal.length > 0) {
                this.$set(this.newValue, "defaultValue", newVal)
            } else {
                this.$set(this.newValue, "defaultValue", null)
            }
        }

        @Watch("selected")
        updateLocator(val: any) {
            if (val > -1) {
                var list = this.getList(this.locator[val])
                this.$set(this.newValue, "defaultValue", list.shift())
            }
        }

        mounted() {
            if (this.value) {
                this.$set(this, "newValue", this.value)
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
            this.$set(this, "openSelectLocator", true)
        }

        getList(item: any): any {
            let list: any[] = []
            Object.keys(item).forEach((key: string) => {
                if (key != "type" && item[key] != null) {
                    list.push(`${key}:${item[key]}`)
                }
            })
            return list
        }
    }
</script>