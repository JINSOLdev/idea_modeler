<template>
    <div class="mb-2">
        <div class="d-flex">
            <div class="ml-2 mr-auto">Locator</div>
            <div v-if="required" class="mr-2">required</div>
        </div>
        <div class="d-flex my-2">
            <open-child-browser
                    v-if="!editMode && valueText == '' && !isWindows"
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
                    full-width
            ></v-text-field>
            
            <div class="ml-2" v-if="!isWindows">
                <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            @click="editMode = !editMode" 
                            v-bind="attrs"
                            v-on="on"
                            :color="editMode ? '' : 'primary'"
                            outlined
                        >
                            <v-icon>
                                {{ editMode ? 'mdi-view-headline' : 'mdi-unfold-more-vertical' }}
                            </v-icon>
                        </v-btn>
                    </template>
                    <span>
                        {{ editMode ? 'Select from list' : 'Edit as code' }}
                    </span>
                </v-tooltip>
            </div>
        </div>

        <v-dialog v-model="openSelectLocator" max-width="600">
            <v-card>
                <v-card-title>
                    Select a Locator
                </v-card-title>

                <v-card-text class="pb-0">
                    <v-select
                            v-model="valueText"
                            :items="locatorItems"
                            placeholder="Select Item"
                            dense
                            outlined
                    ></v-select>
                </v-card-text>
                
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn @click="openSelectLocator = false"
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
        @Prop() public isWindows!: boolean
        
        
        locator: any[] = []
        locatorItems: any[] = []
        newValue: any = {
            name: "locator",
            valueType: "locator",
            defaultValue: null,
        }
        editMode: boolean = false
        openSelectLocator: boolean = false
        
        get valueText() {
            var text = ""
            if (this.newValue && this.newValue.defaultValue != null) {
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

        @Watch("locator")
        updateLocator(val: any) {
            if (val && val.length > 0) {
                var list: any[] = []
                var lastEl = this.locator.pop()
                Object.keys(lastEl).forEach((key: string) => {
                    if (lastEl[key] && lastEl[key] != null && key != "type") {
                        list.push(`${key}:${lastEl[key]}`)
                    }
                })
                this.$set(this, "locatorItems", list)
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
    }
</script>