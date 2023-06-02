<template>
    <div>
        <!-- descrition -->
        <div class="ml-4 my-2 body-2">
            {{ description }}
        </div>
        <v-divider></v-divider>
        
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
                :description.sync="description"
                @setDescription="setDescription"
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
        public description: string = ""

        get panelName() {
            this.description = ""
            if (this.value.type == "DefinitionKeyword") {
                return ""

            } else {
                if (this.value.library) {
                    var group = this.value.library.replace("RPA.", "")
                        .replace("Robocorp.", "")
                        .replace(".Selenium", "")
                    group = group.replace(".", "_")
                    var path = group + "/" + this.value.name.replaceAll(" ", "") + "Panel"
                    return () => import(`@/components/designer/modeling/elements/keyword/${path}`)

                } else {
                    return this.kebabCase(this.value.name) + "-panel"
                }
            }
        }

        setDescription(value: string) {
            this.description = value
        }

    }
</script>