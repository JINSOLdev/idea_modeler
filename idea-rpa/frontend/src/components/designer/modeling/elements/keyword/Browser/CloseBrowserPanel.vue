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
    export default class CloseBrowserPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Closes the current browser."
            this.$emit("setDescription", description)
        }
    }
</script>