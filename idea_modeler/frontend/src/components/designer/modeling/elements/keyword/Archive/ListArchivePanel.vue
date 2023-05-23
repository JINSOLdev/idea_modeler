<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>

                <path-field
                        :label="'Archive Name'"
                        :hint="'Filename of the archive'"
                        :value.sync="path.property.archivename"
                ></path-field>



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
    
    export default class ListArchivePanel extends Mixins(KeywordPanel) {
    }
</script>