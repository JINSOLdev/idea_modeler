<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <path-field
                        :label="'Path'"
                        :hint="'Path to file on disk'"
                        :value.sync="value.propert.path"
                ></path-field>

                <variables-field 
                        :label="'Name'"
                        :hint="'Destination name for file. If not given, current name of local file is used'"
                        :value.sync="value.property.name"
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
    export default class AddWorkItemFilePanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Add given file to work item."
            this.$emit("setDescription", description)
        }
    }
</script>