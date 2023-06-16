<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>
            
            <v-card-text>
                <locator-field
                        :label="'Locator'"
                        :hint="'Locator for root element'"
                        :value.sync="value.property.locator"
                ></locator-field>

                <variables-field 
                        :label="'Max Depth'"
                        :hint="'Maximum search depth'"
                        :value.sync="value.property.max_depth"
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
    export default class PrintTreePanel extends Mixins(KeywordPanel) {
        mounted(){
            var description = "Print Control element tree."
            this.$emit("setDescription", description)
        }
    }
</script>