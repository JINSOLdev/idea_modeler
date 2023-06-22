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
    export default class GetSeleniumSpeedPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Gets the delay that is waited after each Selenium command."
            this.$emit("setDescription", description)
        }
    }
</script>