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
    export default class LogLocationPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Logs and returns the current browser window URL."
            this.$emit("setDescription", description)
        }
    }
</script>