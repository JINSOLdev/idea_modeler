<template>
    <div>
        <v-card flat>
            <v-card-text>
                Allows exiting from a running loop structure, and continuing execution.
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

    export default class BreakTaskPanel extends Mixins(ControlPanel) {
        mounted() {
        }
    }
</script>