<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>

                    <variables-field 
                        :label="'Name'"
                        :hint="'Name of cookie'"
                        :value.sync="value.property.name"
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
    export default class GetCookiePanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Returns information of cookie with name as an object."
            this.$emit("setDescription", description)
        }
    }
</script>