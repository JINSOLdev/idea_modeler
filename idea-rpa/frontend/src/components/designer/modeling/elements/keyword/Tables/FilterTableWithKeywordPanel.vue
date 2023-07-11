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
                        :label="'Name'"
                        :hint="'Keyword name used as filter'"
                        :value.sync="value.property.name"
                        :required="true"
                ></variables-field>

                <variables-field
                        :label="'Args'"
                        :hint="'Additional keyword arguments to be passed'"
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
    export default class FilterTableWithKeywordPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Run a keyword for each row of a table, then remove all rows where the called keyword returns a falsy value. Can be used to create custom RF keyword based filters."
            this.$emit("setDescription", description)
        }
    }
</script>