<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <path-field
                        :label="'Source'"
                        :hint="'Path to source directory'"
                        :value.sync="value.property.source"
                        :required="true"
                ></path-field>

                <path-field
                        :label="'Destination'"
                        :hint="'Path to move to'"
                        :value.sync="value.property.destination"
                        :required="true"
                ></path-field>

                <switch-field
                        :valur.sync="value.property.overwrite"
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
    export default class MoveDirectoryPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Move a directory from source path to destination path."
            this.$emit("setDescription", description)
        }
    }
</script>