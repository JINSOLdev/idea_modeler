<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Pattern'"
                        :hint="'Search pattern in glob format, e.g. *.xlsx'"
                        :value.sync="value.property.pattern"
                ></variables-field>

                <v-switch
                        v-model="value.property.formattingAsEmpty"
                        label="Include Dirs"
                        hint="Include directories in result"
                        persistent-hint
                        class="py-0"
                ></v-switch>

                <v-switch
                        v-model="value.property.formattingAsEmpty"
                        label="Include Files"
                        hint="Include files in result"
                        persistent-hint
                        class="py-0"
                ></v-switch>

                
               
            </v-card-text>
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
    export default class FindFilesPanel extends Mixins(KeywordPanel) {
    }
</script>