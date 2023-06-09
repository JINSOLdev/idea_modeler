<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <path-field
                        :label="'Source'"
                        :hint="'File to copy'"
                        :value.sync="value.property.source"
                        :required="true"
                ></path-field>
                <path-field
                        :label="'Destination'"
                        :hint="'Destination path'"
                        :value.sync="value.property.destination"
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
    export default class CopyFilePanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Copy a file from source path to destination path."
            this.$emit("setDescription", description)
        }
    }
</script>