<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <path-field
                        :label="'Name or Path'"
                        :hint="'Name or path of application'"
                        :value.sync="value.property.name_or_path"
                        :required="true"
                ></path-field>
            </v-card-text>

            <v-card-text>
                <variables-field 
                        :label="'args'"
                        :hint="'Command line arguments for application'"
                        :value.sync="value.property.args"
                        :isMultiple="true"
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
    export default class OpenApplicationPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Start a given application by name (if in PATH), or by path to executable."
            this.$emit("setDescription", description)
        }
    }
</script>