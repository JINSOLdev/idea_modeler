<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Row'"
                        :hint="'Index of row'"
                        :value.sync="value.property.row"
                        :required="true"
                ></variables-field>
            </v-card-text>

            <v-card-text>
                <variables-field
                        :label="'Column'"
                        :hint="'Name or index of column'"
                        :value.sync="value.property.column"
                        :required="true"
                ></variables-field>
            </v-card-text>

            <v-card-text>
                <path-field
                        :label="'Path'"
                        :hint="'Path to image file'"
                        :value.sync="value.property.path"
                        :required="true"
                ></path-field>
            </v-card-text>

            <v-card-text>
                <variables-field
                        :label="'Scale'"
                        :hint="'Scale of image'"
                        :value.sync="value.property.scale"
                ></variables-field>
            </v-card-text>

            <v-card-text>
                <variables-field
                        :label="'Name'"
                        :hint="'Name of worksheet'"
                        :value.sync="value.property.name"
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
    export default class InsertImageToWorksheetPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Insert an image into the given cell."
            this.$emit("setDescription", description)
        }
    }
</script>