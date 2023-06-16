<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field 
                        :label="'Text'"
                        :hint="'Text to enter into the Run input field (e.g. Notepad)'"
                        :value.sync="value.property.text"
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
    export default class WindowsRunPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Use Windows run window to launch application."
            this.$emit("setDescription", description)
        }
    }
</script>