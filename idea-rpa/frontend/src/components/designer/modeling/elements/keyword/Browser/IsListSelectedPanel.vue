<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <locator-field 
                        :hint="'Locator for element'"
                        :value.sync="value.property.locator"
                ></locator-field>
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
    export default class IsListSelectedPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Is any option selected in the"
            this.$emit("setDescription", description)
        }
    }
</script>