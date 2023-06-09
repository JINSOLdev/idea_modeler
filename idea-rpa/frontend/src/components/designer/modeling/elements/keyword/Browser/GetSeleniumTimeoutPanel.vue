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
    export default class GetSeleniumTimeoutPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Get the timeout that is used by various keywords."
            this.$emit("setDescription", description)
        }
    }
</script>