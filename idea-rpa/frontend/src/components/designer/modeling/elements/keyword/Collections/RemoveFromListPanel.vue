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
                        :hint="'List to modify'"
                        :required="true"
                ></variables-field>

                <variables-field
                        :label="'index'"
                        :value.sync="value.property.index"
                        :hint="'Index for value to remove'"
                        :required="true"
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
    export default class RemoveFromListPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Removes and returns the value specified with an index from list."
            this.$emit("setDescription", description)
        }
    }
</script>