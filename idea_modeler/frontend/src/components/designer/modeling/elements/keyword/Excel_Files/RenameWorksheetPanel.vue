<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Src Name'"
                        :hint="'Current name of worksheet'"
                        :value.sync="value.property.src_name"
                        :required="true"
                ></variables-field>

                <variables-field
                        :label="'Dst Name'"
                        :hint="'Future name of worksheet'"
                        :value.sync="value.property.dst_name"
                        :required="true"
                ></variables-field>
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
    export default class RenameWorksheetPanel extends Mixins(KeywordPanel) {
    }
</script>