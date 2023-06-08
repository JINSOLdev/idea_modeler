<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <path-field
                        :label="'Source Path'"
                        :hint="'Path to source PDF'"
                        :value.sync="value.property.sourcepath"
                ></path-field>
                <path-field
                        :label="'Output Path'"
                        :hint="'Path where to save the updated PDf '"
                        :value.sync="value.property.outputpath"
                ></path-field>
                <variables-field 
                        :label="'Newvals'"
                        :hint="'New values when updating many at once. Ket-value dictionary'"
                        :value.sync="value.property.newvals"
                    ></variables-field>

                    <v-switch
                        v-model="value.property.useappearanceswriter"
                        label="Use Appearances Writer"
                        hint="For some PDF documents the updated fields won't be visible, try to set this on if you encounter problems(viewing the output PDF in browser might display the field values then)"
                        persistent-hint
                        class="py-0"
                ></v-switch>

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
    export default class SetFieldValuesPanel extends Mixins(KeywordPanel) {
    }
</script>