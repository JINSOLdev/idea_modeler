<template>
    <div>
        <v-card flat>
            <v-card-text>
                Allows skipping the rest of the current loop iteration, and continuing directly to the next.
            </v-card-text>
        </v-card>
    </div>
</template>

<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import ControlPanel from "../panels/ControlPanel.vue";

    @Component({
        components: {
            ControlPanel,
        }
    })

    export default class ContinueTaskPanel extends Mixins(ControlPanel) {
        mounted() {
        }
    }
</script>