<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <v-switch
                        v-model="value.property.inner"
                        label="Inner"
                        hint="Return browser's inner width/height"
                        persistent-hint
                        class="py-0 mb-6"
                ></v-switch>

            </v-card-text>

        </v-card>
        <return-values-field
                :value.sync="value.property.size"
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
    export default class GetWindowSizePanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Returns current window width and height as integers."
            this.$emit("setDescription", description)
        }
    }
</script>