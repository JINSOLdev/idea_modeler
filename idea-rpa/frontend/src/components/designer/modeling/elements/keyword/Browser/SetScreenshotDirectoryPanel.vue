<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <Path-field
                        :label="'Path'"
                        :hint="'Path to screenshot directory, or the special value EMBED'"
                        :value.sync="value.property.path"
                        :required="true"
                ></Path-field>
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
    
    export default class SetScreenshotDirectoryPanel extends Mixins(KeywordPanel) {
    }
</script>