<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <Locator-field
                        :label="'Locator'"
                        :hint="'Locator of input element.'"
                        :value.sync="value.property.locator"
                        :required="true"
                ></Locator-field>
            </v-card-text>

            <v-card-text>
                <variables-field 
                        :label="'Text'"
                        :hint="'Text to write.'"
                        :value.sync="value.property.text"
                        :required="true"
                ></variables-field> 
            </v-card-text>

            <v-card-text>
                    <v-switch
                        v-model="value.property.clear"
                        label="Clear"
                        hint="Clear element before writing"
                        persistent-hint
                        class="py-0 mb-6"
                ></v-switch>
            </v-card-text>

            <v-card-text>
                    <v-switch
                        v-model="value.property.enter"
                        label="Enter"
                        hint="Press Enter / Return key after typing text"
                        persistent-hint
                        class="py-0 mb-6"
                ></v-switch>
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
    export default class TypeTextIntoPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Type text at the position indicated by given locator."
            this.$emit("setDescription", description)
        }
    }
</script>