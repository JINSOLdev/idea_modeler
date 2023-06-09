<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <path-field
                        :label="'Path'"
                        :hint="'Path to file'"
                        :value.sync="value.property.path"
                        :required="true"
                ></path-field>

                <switch-field
                        :value.sync="value.property.missing_ok"
                        :label="'Missing Ok'"
                        :hint="'Ignore non-existent file'"
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
    export default class RemoveFilePanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Removes the given file."
            this.$emit("setDescription", description)
        }
    }
</script>