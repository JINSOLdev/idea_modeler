<!--
    TODO: 변수 할당 필요함. UI만 작업하였음
-->
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
    export default class ListWindowsPanel extends Mixins(KeywordPanel) {
        mounted(){
            var description = "List all window element on the system."
            this.$emit("setDescription", description)
        }
    }
</script>