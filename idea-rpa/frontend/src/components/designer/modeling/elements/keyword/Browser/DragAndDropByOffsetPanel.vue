<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <locator-field 
                        :label="'Locator'"
                        :hint="'Locator for element'"
                        :value.sync="value.property.locator"
                        :required="true"
                ></locator-field>  

                <variables-field 
                        :label="'Xoffset'"
                        :hint="'X-axis offset in pixels'"
                        :value.sync="value.property.xoffset"
                        :required="true"
                ></variables-field>  

                <variables-field 
                        :label="'Yoffset'"
                        :hint="'Y-axis offset in pixels'"
                        :value.sync="value.property.yoffset"
                        :required="true"
                ></variables-field>  
            </v-card-text>
        </v-card>
    </div>
</template>

<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordPanel from '../../panels/KeywordPanel.vue'

    @Component({
        components: {
            KeywordPanel,
        }
    })
    export default class DragAndDropByOffsetPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Drags the element identified with locator by xoffset/yoffset."
            this.$emit("setDescription", description)
        }
    }
</script>