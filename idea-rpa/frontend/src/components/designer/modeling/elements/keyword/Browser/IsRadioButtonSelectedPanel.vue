<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field 
                        :label="'Group Name'"
                        :hint="'radio button group name'"
                        :value.sync="value.property.group_name"
                        :required="true"
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
    export default class IsRadioButtonSelectedPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Is any radio button selected in the button group"
            this.$emit("setDescription", description)
        }
    }
</script>