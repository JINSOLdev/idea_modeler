<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Group Name'"
                        :hint="'Name of radio button group'"
                        :value.sync="value.property.group_name"
                        :required="true"
                ></variables-field>

                <variables-field
                        :label="'Value'"
                        :hint="'The id or value attribute of the radio button'"
                        :value.sync="value.property.value"
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
    
    export default class SelectRadioButtonPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Sets the radio button group group_name to value."
            this.$emit("setDescription", description)
        }
    }
</script>