<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <locator-field 
                        :label="'Locator'"
                        :hint="'Locator for element'"
                        :value.sync="value.property.locator"
                ></locator-field> 

                <variables-field
                        :label="'Text'"
                        :hint="'Text to search for'"
                        :value.sync="value.property.text"
                ></variables-field>
            </v-card-text>
        </v-card>

        <return-values-field
                :value.sync="value.property.returnVal"
        ></return-values-field>
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
    export default class DoesFrameContainPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Does frame contain expected text"
            this.$emit("setDescription", description)
        }
    }
</script>