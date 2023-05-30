<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>
            
            <v-card-text>
                <variables-field
                        :label="'Name'"
                        :hint="'Name of library'"
                        :value.sync="value.property.name"
                ></variables-field>
                <v-switch
                    v-model="value.property.All"
                    label="All"
                    messages="Return all library names and instances"
                    class="py-0"
                ></v-switch>
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
    export default class GetLibraryInstancePanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Returns the currently active instance of the specified library."
            this.$emit("setDescription", description)
        }
    }
</script>