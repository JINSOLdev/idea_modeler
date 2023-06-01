<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field 
                        :label="'Timeout'"
                        :hint="'Set default timeout.'"
                        :value.sync="value.property.timeout"
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
    export default class SetDefaultTimeoutPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Set the default time to wait for elements."
            this.$emit("setDescription", description)
        }
    }
</script>