<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>
            <v-card-text>     
                <!--locator-->
                <variables-field 
                        :label="'Locator'"
                        :hint="'Locator for element'"
                        :value.sync="value.property.locator"
                    ></variables-field> 

                <variables-field 
                        :label="'Password'"
                        :hint="'Password value'"
                        :value.sync="value.property.password"
                    ></variables-field> 

                    <v-switch
                        v-model="value.property.clear"
                        label="Clear"
                        hint="Cleaar input before text is typed"
                        persistent-hint
                        class="py-0 mb-6"
                ></v-switch>


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
    export default class InputPasswordPanel extends Mixins(KeywordPanel) {
    }
</script>