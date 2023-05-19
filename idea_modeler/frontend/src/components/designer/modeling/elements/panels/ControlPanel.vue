<template>
    <div>
        <component
                :is="panelName"
                :value.sync="value"
        ></component>
    </div>
</template>

<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import Panel from "./CommonPanel.vue";

    @Component({
        components: {
            Panel
        }
    })

    export default class ControlPanel extends Mixins(Panel) {
        mounted() {
        }

        get panelName() {
            return this.kebabCase(this.value.type) + "-panel"
        }
    }
</script>