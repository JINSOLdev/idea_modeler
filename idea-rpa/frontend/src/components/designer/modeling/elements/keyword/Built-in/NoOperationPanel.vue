<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Does absolutely nothing.
            </v-card-title>
            
            
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
    export default class NoOperationPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Does absolutely nothing."
            this.$emit("setDescription", description)
        }
    }
</script>