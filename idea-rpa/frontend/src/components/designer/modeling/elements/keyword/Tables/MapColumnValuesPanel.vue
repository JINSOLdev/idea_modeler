<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Table'"
                        :hint="'Table to modify'"
                        :value.sync="value.property.table"
                        :required="true"
                ></variables-field>

                <variables-field
                        :label="'Column'"
                        :hint="'Column to modify'"
                        :value.sync="value.property.column"
                        :required="true"
                ></variables-field>

                <variables-field
                        :label="'Name'"
                        :hint="'Mapping keyword name'"
                        :value.sync="value.property.name"
                        :required="true"
                ></variables-field>

                <variables-field
                        :label="'Args'"
                        :hint="'Additional keyword arguments'"
                        :value.sync="value.property.args"
                        :isMultiple="true"
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
    export default class MapColumnValuesPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "The cell value will be given as the first argument to the mapping keyword."
            this.$emit("setDescription", description)
        }
    }
</script>