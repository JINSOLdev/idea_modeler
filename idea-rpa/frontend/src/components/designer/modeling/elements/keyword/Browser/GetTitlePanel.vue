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
    export default class GetTitlePanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Returns the title of the current page."
            this.$emit("setDescription", description)
        }
    }
</script>