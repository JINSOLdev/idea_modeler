<template>
    <div>
        <v-card v-if="value.type == 'DefinitionKeyword'" flat>
            <v-card-text>
                <v-text-field
                        v-model="value.name"
                        label="Name"
                ></v-text-field>
            </v-card-text>
        </v-card>
        <component 
                v-else
                :is="panelName"
                :value.sync="value"
        ></component>
    </div>
</template>


<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator";
    import Panel from "./CommonPanel.vue";

    @Component({
        components: {
            Panel
        }
    })
    export default class Keyword extends Mixins(Panel) {
        
        get panelName() {
            if (this.value.type == "DefinitionKeyword") {
                return ""
            } else {
                return this.kebabCase(this.value.name) + "-panel"
            }
        }

    }
</script>