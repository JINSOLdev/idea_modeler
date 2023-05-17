<template>
    <v-navigation-drawer
            absolute
            permanent
            right
            style="width: 500px;"
    >
        <template v-slot:prepend>
            <v-list-item two-line>
                <v-list-item-avatar>
                    <v-icon>{{ elementIcon }}</v-icon>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title>
                        {{ value.name }}
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        {{ description }}
                    </v-list-item-subtitle>
                </v-list-item-content>

                <v-btn icon @click.native="closePanel()">
                    <v-icon color="grey lighten-1">mdi-close</v-icon>
                </v-btn>
            </v-list-item>
        </template>

        <v-divider></v-divider>
        <control-panel
                v-if="isControl"
                :value.sync="value"
        ></control-panel>
        <keyword-panel
                v-else
                :value.sync="value"
        ></keyword-panel>
    </v-navigation-drawer>
</template>
<script lang="ts">
    import { Vue, Component, Prop } from "vue-property-decorator"
    
    @Component
    export default class CommonPanel extends Vue {
        @Prop() public value!: any
        
        // Data
        public controlList: any[] = Vue.prototype.$controlList
        public description: string = ""
        public elementIcon: string = "mdi-square"

        // Computed
        get elementType() {
            return this.value.type
        }

        get isControl() {
            if(this.value.name.includes('Try-')) {
                return true
            }
            return this.controlList.includes(this.value.name+' Task')
        }

        mounted() {
            if (this.value.type == "DefinitionKeyword") {
                this.description = "User Keywords"
            }
        }
        
        // Methods
        kebabCase(str: string) {
            const result = str
                .replace(/([a-z])([A-Z])/g, "$1-$2")
                .replace(/[\s_]+/g, '-')
                .toLowerCase();
            return result
        }

        closePanel() {
            this.$emit('close')
        }

        includePanel() {
            console.log(document.querySelectorAll("input"))
        }
    }
</script>