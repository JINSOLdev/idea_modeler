<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Value'"
                        :hint="'Time in human-readable format, e.g. 1 second'"
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
    
    export default class SetSeleniumImplicitWaitPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Sets the implicit wait value used by Selenium."
            this.$emit("setDescription", description)
        }
    }
</script>