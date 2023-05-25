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
    export default class CloseCurrentWindowPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Closes current activate window or logs a warning message."
            this.$emit("setDescription", description)
        }
    }
</script>