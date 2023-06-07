<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <path-field
                        :label="'Path'"
                        :hint="'Path to output file'"
                        :value.sync="value.property.path"
                ></path-field>

                <variables-field
                        :label="'Content'"
                        :hint="'Content to write'"
                        :value.sync="value.property.content"
                ></variables-field>

                <variables-field
                        :label="'Encoding'"
                        :hint="'Character encoding of output file'"
                        :value.sync="value.property.encoding"
                ></variables-field>

                <switch-field
                        :valur.sync="value.property.overwrite"
                        :label="'Overwrite'"
                        :hint="'Replace existing file'"
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
    export default class CreateFilePanel extends Mixins(KeywordPanel) {
    }
</script>