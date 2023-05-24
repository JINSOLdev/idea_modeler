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
                        :isDir="true"
                        :required="true"
                ></path-field>

                <path-field
                        :label="'Destination'"
                        :hint="'Path to copy destination'"
                        :value.sync="value.property.destination"
                        :isDir="true"
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
    export default class CopyDirectoryPanel extends Mixins(KeywordPanel) {
    }
</script>