<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                    :label="'Text'"
                    :hint="'string to write'"
                    :value.sync="value.property.text"
                ></variables-field>

                <switch-field
                    :label="'Newline'"
                    :hint="'write text to newline if True, default to True'"
                    :value.sync="value.property.newline"
                ></switch-field>

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
    export default class WriteTextPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Writes given text at the end of the document"
            this.$emit("setDescription", description)
        }
    }
</script>