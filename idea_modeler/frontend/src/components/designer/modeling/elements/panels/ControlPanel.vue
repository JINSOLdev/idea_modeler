<template>
    <div>
        <!-- descrition -->
        <div class="ml-4 my-2 body-2">
            {{ description }}
        </div>
        <v-divider></v-divider>

        <component
                :is="panelName"
                :value.sync="value"
                :description.sync="description"
                @setDescription="setDescription"
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
        public description:string = ""

        get panelName() {
            this.description = ""
            return this.kebabCase(this.value.type) + "-panel"
        }

        setDescription(value: string) {
            this.description = value
        }
    }
</script>