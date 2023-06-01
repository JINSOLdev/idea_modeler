<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field 
                        :label="'Text'"
                        :hint="'Text to write.'"
                        :value.sync="value.property.text"
                        :required="true"
                ></variables-field> 
            </v-card-text>

            <v-card-text>
                <variables-field 
                        :label="'Modifiers'"
                        :hint="'Modifier or functions keys held during typing.'"
                        :value.sync="value.property.modifiers"
                        :isMultiple="true"
                ></variables-field> 
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
    export default class TypeTextPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Type text one letter at a time."
            this.$emit("setDescription", description)
        }
    }
</script>