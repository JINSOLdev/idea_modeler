<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field 
                        :label="'App'"
                        :hint="'App instance'"
                        :value.sync="value.property.app"
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
    export default class CloseApplicationPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Close given application. Needs to be started with this library."
            this.$emit("setDescription", description)
        }
    }
</script>