<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Template'"
                        :hint="'Text template to format'"
                        :value.sync="value.property.template"
                        :required="true"
                ></variables-field>
            
                <variables-field
                        :label="'Positional'"
                        :hint="'Positional arguments to insert'"
                        :value.sync="value.property.positional"
                ></variables-field>

                <keyword-args-field
                        :label="'Named'"
                        :value.sync="value.property.named"
                ></keyword-args-field>
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
    export default class FormatStringPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Formats a template using the given positional and named arguments."
            this.$emit("setDescription", description)
        }
    }
</script>