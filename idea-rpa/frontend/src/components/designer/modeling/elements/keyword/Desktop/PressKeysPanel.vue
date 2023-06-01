<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field 
                        :label="'Keys'"
                        :hint="'Keys to press'"
                        :value.sync="value.property.keys"
                        :required="true"
                        :isMultiple="true"
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
    export default class PressKeysPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Press multiple keys down simultaneously."
            this.$emit("setDescription", description)
        }
    }
</script>