<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>

            </v-card-text>

        </v-card>
        <return-values-field
                :value.sync="value.property.speed"
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
    export default class GetSeleniumSpeedPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Gets the delay that is waited after each Selenium command."
            this.$emit("setDescription", description)
        }
    }
</script>