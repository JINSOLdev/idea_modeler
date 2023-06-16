<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <switch-field
                        :label="'Save Changes'"
                        :hint="'Quit the application'"
                        :value.sync="value.property.save_changes"
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
    export default class QuitApplicationPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Quit the application."
            this.$emit("setDescription", description)
        }
    }
</script>