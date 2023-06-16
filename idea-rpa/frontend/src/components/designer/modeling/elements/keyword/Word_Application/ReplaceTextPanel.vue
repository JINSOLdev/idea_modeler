<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Find'"
                        :hint="'Text to replace'"
                        :value.sync="value.property.find"
                ></variables-field>

                <variables-field
                        :label="'Replace'"
                        :hint="'New text'"
                        :value.sync="value.property.replace"
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
    export default class ReplaceTextPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Replace text in active document"
            this.$emit("setDescription", description)
        }
    }
</script>