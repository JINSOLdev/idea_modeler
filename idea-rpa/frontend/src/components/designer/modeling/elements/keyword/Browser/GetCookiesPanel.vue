<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>

                <v-switch
                        v-model="value.property.as_dict"
                        label="As Dict"
                        hint="Return cookies as dictionary instead of string"
                        persistent-hint
                        class="py-0 mb-6"
                ></v-switch>
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
    export default class GetCookiesPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Returns all cookies of the current page"
            this.$emit("setDescription", description)
        }
    }
</script>