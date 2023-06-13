<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>

                <variables-field 
                        :label="'Field Name'"
                        :hint="'Field to update'"
                        :value.sync="value.property.field_name"
                        :required="true"
                    ></variables-field>

                    <variables-field 
                        :label="'Value'"
                        :hint="'New value for the field'"
                        :value.sync="value.property.value"
                        :required="true"
                    ></variables-field>

                    <path-field
                        :label="'Source Path'"
                        :hint="'Path to source PDF'"
                        :value.sync="value.property.source_path"
                ></path-field>

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
    export default class SetFieldValuePanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Set value for field with given name on the active document."
            this.$emit("setDescription", description)
        }

    }
</script>