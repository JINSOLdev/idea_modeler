<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <path-field
                        :label="'Source'"
                        :hint="'Source path'"
                        :value.sync="value.property.source"
                        :required="true"
                ></path-field>

                <path-field
                        :label="'Destination'"
                        :hint="'Destination path'"
                        :value.sync="value.property.destination"
                        :required="true"
                ></path-field>

                <switch-field
                        :value.sync="value.property.overwrite"
                        :label="'Overwrite'"
                        :hint="'Replace destination file'"
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
    export default class MoveFilePanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Move a file from source path to destination path, optionally overwriting the destination."
            this.$emit("setDescription", description)
        }
    }
</script>