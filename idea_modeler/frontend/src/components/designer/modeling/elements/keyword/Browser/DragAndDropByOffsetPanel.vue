<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
<!--locator-->
                    <variables-field 
                        :label="'Locator'"
                        :hint="'Locator for element'"
                        :value.sync="value.property.locator"
                    ></variables-field>  

                    <variables-field 
                        :label="'Xoffset'"
                        :hint="'X-axis offset in pixels'"
                        :value.sync="value.property.xoffset"
                    ></variables-field>  

                    <variables-field 
                        :label="'Yoffset'"
                        :hint="'Y-axis offset in pixels'"
                        :value.sync="value.property.yoffset"
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
    }
</script>