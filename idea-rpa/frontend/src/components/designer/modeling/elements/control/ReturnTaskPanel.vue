<template>
    <div>
        <return-values-field
                :label="'Return Values'"
                :hint="'No return values defined.'"
                :value.sync="value.property.returnVal"
                :isVars="true"
        ></return-values-field>
    </div>
</template>

<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import ControlPanel from "../panels/ControlPanel.vue";

    @Component({
        components: {
            ControlPanel,
        }
    })

    export default class ReturnTaskPanel extends Mixins(ControlPanel) {
        mounted() {
        }
    }
</script>