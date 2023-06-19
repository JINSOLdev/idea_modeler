<template>
    <div>
        <return-values-field
                :label="'Assign Variables'"
                :value.sync="value.property.assign_variables"
        ></return-values-field>

        <v-card flat>            
            <v-card-text>
                <v-select
                        v-model="value.property.type"
                        :items="typeList"
                        outlined
                        dense
                        :label="value.property.type"
                ></v-select>

                <variables-field
                        :label="'Loop Values'"
                        :value.sync="value.property.loop_values"
                        :isMultiple="true"
                ></variables-field>
            </v-card-text>

            <!-- <return-values-field
                :value.sync="value.property.returnVal"
        ></return-values-field> -->
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
        public typeList: any[] = [
            "in",
            "in enumerate",
            "in range",
            "in zip",
        ]
        mounted() {
            var description = "Allows execution a set of keywords multiple times"
            this.$emit("setDescription", description)
        }
    }
</script>