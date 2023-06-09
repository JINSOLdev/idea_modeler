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
    export default class EmptyDirectoryPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Removes all the files in the given directory."
            this.$emit("setDescription", description)
        }
    }
</script>