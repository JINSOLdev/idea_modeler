<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <Path-field
                        :label="'Path'"
                        :hint="'Path to save to'"
                        :value.sync="value.property.path"
                ></Path-field>

            </v-card-text>
        </v-card>

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
    export default class SaveWorkbookPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Save the active workbook."
            this.$emit("setDescription", description)
        }
    }
</script>