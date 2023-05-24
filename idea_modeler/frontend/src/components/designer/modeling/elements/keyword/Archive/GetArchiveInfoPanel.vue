<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>

                <variables-field
                        :label="'Filename'"
                        :hint="'name of the file to extract from the archive'"
                        :value.sync="value.property.filename"
                ></variables-field>


            </v-card-text>

            <return-values-field
                :value.sync="value.property.archive_info"
            ></return-values-field>

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
    
    export default class GetArchiveInfoPanel extends Mixins(KeywordPanel) {
    }
</script>