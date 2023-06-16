<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>
        </v-card>

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