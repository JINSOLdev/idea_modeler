<template>
    <div>
        <v-card flat>
            <v-card-text>
                Closes current activate window or logs a warning message.
                <v-divider></v-divider>
                <!-- <div class="subtitle-1">Assign Return Values</div> -->
                <ReturnValuesField></ReturnValuesField>
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
    export default class CloseCurrentWindowPanel extends Mixins(KeywordPanel) {
    }
</script>