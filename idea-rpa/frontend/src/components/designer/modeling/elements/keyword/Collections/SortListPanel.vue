<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>
            
            <v-card-text>
                <variables-field
                        :label="'List'"
                        :value.sync="value.property.list"
                        :hint="'List to sort'"
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
    export default class SortListPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Sorts the given list in place."
            this.$emit("setDescription", description)
        }
    }
</script>