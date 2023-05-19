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
                ></locator-field>
    
                <v-divider></v-divider>
                <!-- <div class="subtitle-1">Assign Return Values</div> -->
                <ReturnValuesField></ReturnValuesField>
            </v-card-text>
        </v-card>
    </div>
</template>

<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import LocatorField from "../../panels/fields/LocatorField.vue";
    import ReturnValuesField from "../../panels/fields/ReturnValuesField.vue";
    import KeywordPanel from '../../panels/KeywordPanel.vue'

    @Component({
        components: {
            KeywordPanel,
        }
    })
    export default class ClickPanel extends Mixins(KeywordPanel) {
    }
</script>