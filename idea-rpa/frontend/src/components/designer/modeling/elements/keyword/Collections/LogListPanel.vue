<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>
            
            <v-card-text>
                <variables-field
                        :label="'List'"
                        :value.sync="value.property.list"
                        :hint="'List to log'"
                        :required="true"
                ></variables-field>

                <variables-field
                        :label="'Level'"
                        :hint="'Logging level, e/g `INFO`'"
                        :value.sync="value.property.level"
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
    export default class LogListPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Logs the length and contents of the list using given level."
            this.$emit("setDescription", description)
        }
    }
</script>