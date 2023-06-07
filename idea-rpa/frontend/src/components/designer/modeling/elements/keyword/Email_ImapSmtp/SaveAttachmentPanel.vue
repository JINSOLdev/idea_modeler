<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Message'"
                        :hint="'Message item'"
                        :value.sync="value.property.message"
                ></variables-field>

                <path-field
                        :label="'Target Folder'"
                        :hint="'Folder for saving attachment to (needs to exist), defaults to users home directory if None'"
                        :value.sync="value.property.targetFolder"
                ></path-field>

                <switch-field
                        :label="'Overwrite'"
                        :hint="'Overwrite existing file if True, defaults to False'"
                        :value.sync="value.property.overwrite"
                ></switch-field>

                <variables-field
                        :label="'Prefix'"
                        :hint="'Optional filename prefix added to the attachments, empty by default'"
                        :value.sync="value.property.token"
                ></variables-field>
            </v-card-text>
            
            <return-values-field
                    :value.sync="value.property.attachments"
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
    
    export default class SaveAttachmentPanel extends Mixins(KeywordPanel) {
    }
</script>