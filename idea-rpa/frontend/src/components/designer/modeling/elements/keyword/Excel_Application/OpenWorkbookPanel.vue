<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <path-field
                        :label="'File name'"
                        :hint="'Path to file name'"
                        :value.sync="value.property.file_name"
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
    export default class OpenWorkbookPanel extends Mixins(KeywordPanel) {
        mounted(){
            var description = "Open Excel by filename."
            this.$emit("setDescription", description)
        }
    }
</script>