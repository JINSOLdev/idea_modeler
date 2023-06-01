<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <Locator-field
                        :label="'Locator'"
                        :hint="'Locator for mouse position'"
                        :value.sync="value.property.locator"
                        :required="true"
                ></Locator-field>
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
    export default class MoveMousePanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Move mouse to given coordinates."
            this.$emit("setDescription", description)
        }
    }
</script>