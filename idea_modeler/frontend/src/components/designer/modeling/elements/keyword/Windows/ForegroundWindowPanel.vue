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
                    :hint="'Optional locator for window'"
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
    export default class ForegroundWindowPanel extends Mixins(KeywordPanel) {
    }
</script>