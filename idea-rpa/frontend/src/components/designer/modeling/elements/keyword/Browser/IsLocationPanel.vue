<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>  
                <v-text-field 
                        :label="'Url'"
                        :hint="'Expected location'"
                        :value.sync="value.property.url"
                        :required="true"
                ></v-text-field> 
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
    export default class IsLocationPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Is current URL expected url"
            this.$emit("setDescription", description)
        }
    }
</script>