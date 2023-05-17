<template>
    <!--
        TODO: 1. 변수 할당 필요함. UI만 작업 하였음.
        TODO: 2. Locator를 Task단위로 등록하여 사용 할 수 있도록.

    -->
    <div>
        Locator
        <v-row class="pa-3">
            <v-autocomplete
                v-if="!editMode"
                :items="varItems"
                item-disabled="disabled"
                :hint="hint"
                :rules="rules"
                persistent-hint
                outlined
                dense
                required
            ></v-autocomplete>
            <v-text-field outlined
                dense v-else></v-text-field>
            <v-tooltip bottom v-if="!editMode">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn primary 
                        @click="editMode = !editMode" 
                        v-bind="attrs"
                        v-on="on"
                    >
                        &lt; &gt;
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
                    >
                        <v-icon>mdi-view-headline</v-icon>
                    </v-btn>
                </template>
                <span>Select from list</span>
            </v-tooltip>
        </v-row>
        
    </div>
</template>


<script lang="ts">
    import { Vue, Component, Prop } from "vue-property-decorator";
    import { Variables } from "../../../../../../types/Variables";
    @Component
    export default class LocatorField extends Vue {
        @Prop() public value!: any
        @Prop() public rules!: any[]
        @Prop() public label!: string
        @Prop() public hint!: string
        @Prop() public isMultiple!: boolean

        varItems: any[] = []
        newValue: any = null
        editMode: Boolean = false
        mounted() {
            var variables = new Variables()
            this.varItems = variables.getVarList()
            
            if (this.isMultiple && (!this.value || this.value.length < 1)) {
                this.newValue = [ "" ]
            } else {
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

        addValue() {
            var lastIdx = this.newValue.length - 1
            if (lastIdx == -1 || (lastIdx >= 0 && this.newValue[lastIdx] != "")) {
                this.newValue.push("")
            }
        }

        delValue(idx: number) {
            this.newValue.splice(idx, 1)
            this.updateValue()
        }
    }
</script>