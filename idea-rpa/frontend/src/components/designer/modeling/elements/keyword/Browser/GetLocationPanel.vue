<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

        </v-card>
        <return-values-field
                :value.sync="value.property.locations"
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
    export default class GetLocationPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Returns the current browser window URL."
            this.$emit("setDescription", description)
        }
    }
</script>