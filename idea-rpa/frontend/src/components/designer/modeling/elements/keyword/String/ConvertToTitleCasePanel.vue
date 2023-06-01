<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'String'"
                        :hint="'String to modify'"
                        :value.sync="value.property.string"
                        :required="true"
                ></variables-field>
       
                <variables-field
                        :label="'Exclude'"
                        :hint="'Words to not convert'"
                        :value.sync="value.property.exclude"
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
    export default class ConvertToTitleCasePanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Converts string to title case."
            this.$emit("setDescription", description)
        }
    }
</script>