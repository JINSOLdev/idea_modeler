<template>
    <div class="ma-2 pa-2">
            <v-text-field
                label="Value"
                v-model="value.value"
                outlined
                hint="Value for cookie"
                persistent-hint
            ></v-text-field>
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
    export default class ChooseFilePanel extends Mixins(KeywordPanel) {
    }
</script>