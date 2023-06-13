<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                ASSIGN RETURN VALUES
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
    export default class GetBrowserIdsPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Returns index of all active browser as list"
            this.$emit("setDescription", description)
        }
    }
</script>