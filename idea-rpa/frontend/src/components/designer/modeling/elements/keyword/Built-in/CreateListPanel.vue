<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>
            
            <v-card-text>
                <variables-field
                        :label="'Items'"
                        :hint="'Items in list'"
                        :value.sync="value.property.item"
                        :isMultiple = "true"
                ></variables-field>
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
    export default class CreateListPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Returns a list containing given items."
            this.$emit("setDescription", description)
        }
    }
</script>