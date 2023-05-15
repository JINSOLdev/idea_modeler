<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>
            
            <v-card-text>
                <variables-field
                        :label="'Format'"
                        :hint="'Output time format'"
                        :value.sync="value.property.format"
                ></variables-field>

                <variables-field
                        :label="'Time'"
                        :hint="'Time definition'"
                        :value.sync="value.property.time"
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
    export default class GetTimePanel extends Mixins(KeywordPanel) {
    }
</script>