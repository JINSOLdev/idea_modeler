<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>
            
            <v-card-text>
                <variables-field
                        :label="'List'"
                        :value.sync="value.property.list"
                        :hint="'List to modify'"
                        :required="true"
                ></variables-field>
                <variables-field
                        :label="'Index'"
                        :value.sync="value.property.index"
                        :hint="'Index for value'"
                        :required="true"
                ></variables-field>
                <variables-field
                        :label="'Value'"
                        :value.sync="value.property.value"
                        :hint="'New value'"
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
    export default class SetListValuePanel extends Mixins(KeywordPanel) {
    }
</script>