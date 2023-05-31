<!--
    TODO: 변수 할당 필요함. UI만 작업하였음
-->
<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>
            
            <v-card-text>
                <Locator-field
                        :label="'Locator'"
                        :hint="'Locator for window to minimize'"
                        :value.sync="value.property.locator"
                ></Locator-field>
            </v-card-text>
        </v-card>

        <return-values-field
                :value.sync="value.property.returnVal"
        ></return-values-field>        
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
    export default class MinimizeWindowPanel extends Mixins(KeywordPanel) {
        mounted(){
            var description = "Minimize the current active window or the window defined by the locator."
            this.$emit("setDescription", description)
        }
    }
</script>