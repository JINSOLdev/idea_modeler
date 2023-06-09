<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Text'"
                        :hint="'Header text to set'"
                        :value.sync="value.property.text"
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
    export default class SetHeaderPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Set header for the active document"
            this.$emit("setDescription", description)
        }
    }
</script>