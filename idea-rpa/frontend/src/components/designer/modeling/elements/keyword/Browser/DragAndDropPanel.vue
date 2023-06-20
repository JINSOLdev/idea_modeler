<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <locator-field 
                        :label="'Locator'"
                        :hint="'Locator for element'"
                        :value.sync="value.property.locator"
                        :required="true"
                ></locator-field>

                <locator-field 
                        :label="'Target'"
                        :hint="'Locator for drag target'"
                        :value.sync="value.property.target"
                        :required="true"
                ></locator-field>
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
    export default class DragAndDrop extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Drags the element identified by locator into the target element"
            this.$emit("setDescription", description)
        }
    }
</script>