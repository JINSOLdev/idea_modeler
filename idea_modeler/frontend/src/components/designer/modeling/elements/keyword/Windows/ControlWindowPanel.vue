<!--
    TODO: 변수 할당 필요함. UI만 작업하였음
-->
<template>
    <div>
        <v-card flat>
            <v-card-text>
                <div class="subtitle-1">
                    Input Arguments
                </div>
                
                <locator-field
                    :value.sync="value.property.locator"
                    :hint="'Locator for window to control'"
                ></locator-field>
                <v-switch
                        v-model="value.property.secure"
                        label="Secure"
                        color="success"
                        hint="Bring window to foreground"
                        persistent-hint
                        class="py-0 mb-6"
                ></v-switch>
                <variables-field
                        :label="'Timeout'"
                        :hint="'Time to wait for locator match (in seconds)'"
                        :value.sync="value.property.timeout"
                ></variables-field>
                <v-divider></v-divider>
                <ReturnValuesField></ReturnValuesField>
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
    export default class ContorlWindowPanel extends Mixins(KeywordPanel) {
    }
</script>