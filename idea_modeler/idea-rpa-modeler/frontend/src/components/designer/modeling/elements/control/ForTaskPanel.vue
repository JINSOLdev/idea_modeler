<template>
    <div>
        <return-values-field
                :label="'Assign Variables'"
                :value.sync="value.itemVarName"
        ></return-values-field>

        <v-card flat>
            <v-card-title class="subtitle-1">
                Loop Values
            </v-card-title>
            
            <v-card-text>
                <v-text-field
                        v-model="value.iterationVarName"
                        outlined
                        dense
                ></v-text-field>
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

    export default class ForTaskPanel extends Mixins(ControlPanel) {
        mounted() {
        }
    }
</script>