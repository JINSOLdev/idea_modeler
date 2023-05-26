<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Time Zone'"
                        :hint="'Timezone to use (`local` or `UTC`)'"
                        :value.sync="value.property.timeZone"
                ></variables-field>

                <variables-field
                        :label="'Increment'"
                        :hint="'Time increment'"
                        :value.sync="value.property.increment"
                ></variables-field>

                <variables-field
                        :label="'Result Format'"
                        :hint="'Format of returned date'"
                        :value.sync="value.property.resultFormat"
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
    export default class GetCurrentDatePanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Returns current local or UTC time with an optional increment."
            this.$emit("setDescription", description)
        }
    }
</script>