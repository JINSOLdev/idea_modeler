<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Value'"
                        :hint="'Index or name of worksheet'"
                        :value.sync="value.property.value"
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
    export default class SetActiveWorksheetPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Set the active worksheet."
            this.$emit("setDescription", description)
        }
    }
</script>