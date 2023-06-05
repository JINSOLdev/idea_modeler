<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>
            
            <v-card-text>
                <variables-field
                        :label="'Dictionary'"
                        :value.sync="value.property.dictionary"
                        :hint="'Dictionary to log'"
                        :required="true"
                ></variables-field>

                <variables-field
                        :label="'Level'"
                        :hint="'Logging level, e/g `INFO`'"
                        :value.sync="value.property.level"
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
    export default class LogDictionaryPanel extends Mixins(KeywordPanel) {
    }
</script>