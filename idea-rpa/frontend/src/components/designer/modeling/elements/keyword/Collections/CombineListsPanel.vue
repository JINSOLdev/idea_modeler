<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>
            
            <v-card-text>
                <variables-field
                        :label="'Lists'"
                        :hint="'Lists to combine'"
                        :value.sync="value.property.lists"
                        :isMultiple="true"
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
    export default class CombineListsPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Combines the given lists together and returns the result."
            this.$emit("setDescription", description)
        }
    }
</script>