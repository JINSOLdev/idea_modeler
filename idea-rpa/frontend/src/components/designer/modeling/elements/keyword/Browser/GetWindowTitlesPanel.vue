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
    export default class GetWindowTitlesPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Returns and logs titles of all windows of the selected browser."
            this.$emit("setDescription", description)
        }
    }
</script>