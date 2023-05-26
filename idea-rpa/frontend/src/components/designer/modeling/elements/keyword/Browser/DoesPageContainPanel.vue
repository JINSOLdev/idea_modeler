<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>

                <Variables-field
                :label="'Text'"
                :hint="'Text to search for'"
                :value.sync="value.property.text"
                :required="true"
                ></Variables-field>
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
    export default class DoesPageContainPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Does page contain expected text"
            this.$emit("setDescription", description)
        }
    }
</script>