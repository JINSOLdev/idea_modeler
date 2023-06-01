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
    export default class ListWorksheetsPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "List all names of worksheets in the given workbook."
            this.$emit("setDescription", description)
        }
    }
</script>