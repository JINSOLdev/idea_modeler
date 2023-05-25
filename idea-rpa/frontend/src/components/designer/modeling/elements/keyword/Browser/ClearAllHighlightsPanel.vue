<template>
    <div>
        <!-- <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>
        </v-card> -->
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
    export default class ClearAllHighlightsPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Remove all highlighting made by Highlight Elements."
            this.$emit("setDescription", description)
        }
    }
</script>