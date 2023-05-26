<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>
            <v-card-text>                      
                <variables-field
                        :label="'Title'"
                        :hint="'Expected title value'"
                        :value.sync="value.property.title"
                        :required=true
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
    export default class IsTitlePanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Is page title expected"
            this.$emit("setDescription", description)
        }
    }
</script>