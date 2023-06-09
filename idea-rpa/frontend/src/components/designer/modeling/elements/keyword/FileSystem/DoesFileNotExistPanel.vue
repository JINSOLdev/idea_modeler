<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <path-field
                        :label="'Path'"
                        :hint="'Path to file'"
                        :value.sync="value.property.path"
                        :required="true"
                ></path-field>
               
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
    export default class DoesFileNotExistPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Returns True if the file does not exist, False if it does."
            this.$emit("setDescription", description)
        }
    }
</script>