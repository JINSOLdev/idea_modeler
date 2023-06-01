<template>
    <div>
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
    export default class GetDisplayDimensionsPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Returns the dimensions of the current virtual display, which is the combined size of all physical monitors."
            this.$emit("setDescription", description)
        }
    }
</script>