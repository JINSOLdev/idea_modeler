<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>
            
            <v-card-text>
                <variables-field
                        :label="'Container'"
                        :hint="'Container to check for items'"
                        :value.sync="value.property.container"
                ></variables-field>

                <variables-field
                        :label="'Item'"
                        :hint="'Item to find'"
                        :value.sync="value.property.item"
                ></variables-field>

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
    export default class GetCountPanel extends Mixins(KeywordPanel) {
    }
</script>