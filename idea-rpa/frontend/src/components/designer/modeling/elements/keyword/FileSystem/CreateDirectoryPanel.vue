<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <path-field
                        :label="'Path'"
                        :hint="'Path to directory'"
                        :value.sync="value.property.path"
                        :required="true"
                ></path-field>

                <switch-field
                        :label="'Parents'"
                        :hint="'Create missing parent directories'"
                        :value.sync="value.property.parents"
                ></switch-field>

                <switch-field
                        :label="'Exist Ok'"
                        :hint="'Continue without errors if directory exists'"
                        :value.sync="value.property.exist_ok"
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
    export default class CreateDirectoryPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Creates a directory and (optionally) non-existing parent directories."
            this.$emit("setDescription", description)
        }
    }
</script>