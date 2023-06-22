<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>       
                <variables-field 
                        :label="'Url'"
                        :hint="'URL to navigate to'"
                        :value.sync="value.property.url"
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
    export default class GoToPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Navigates the current browser window to the provided url."
            this.$emit("setDescription", description)
        }
    }
</script>