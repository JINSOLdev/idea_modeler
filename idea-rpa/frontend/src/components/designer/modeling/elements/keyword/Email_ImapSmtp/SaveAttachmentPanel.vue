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
                        :required="true"
                ></variables-field>

                <path-field
                        :label="'Target Folder'"
                        :hint="'Folder for saving attachment to (needs to exist), defaults to users home directory if None'"
                        :value.sync="value.property.target_folder"
                        :required="true"
                ></path-field>

                <switch-field
                        :label="'Overwrite'"
                        :hint="'Overwrite existing file if True, defaults to False'"
                        :value.sync="value.property.overwrite"
                ></switch-field>

                <variables-field
                        :label="'Prefix'"
                        :hint="'Optional filename prefix added to the attachments, empty by default'"
                        :value.sync="value.property.prefix"
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
    
    export default class SaveAttachmentPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Save email attachment of a single given email on the local disk."
            this.$emit("setDescription", description)
        }
    }
</script>