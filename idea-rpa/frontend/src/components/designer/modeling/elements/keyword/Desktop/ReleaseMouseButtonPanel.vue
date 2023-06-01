<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field 
                        :label="'Button'"
                        :hint="'Button to release'"
                        :value.sync="value.property.button"
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
    export default class ReleaseMouseButtonPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Release mouse button that was previously pressed."
            this.$emit("setDescription", description)
        }
    }
</script>