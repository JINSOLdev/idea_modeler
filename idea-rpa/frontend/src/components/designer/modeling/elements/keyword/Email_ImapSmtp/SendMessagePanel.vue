<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Sender'"
                        :hint="'Who is sending, i.e. "from"'"
                        :value.sync="value.property.sender"
                ></variables-field>

                <variables-field
                        :label="'Recipents'"
                        :hint="'Who is receiving, ie. \'to\' (either as comma-separated or as list object) '"
                        :value.sync="value.property.recipients"
                ></variables-field>

                <variables-field
                        :label="'Subject'"
                        :hint="'Email\'s subject field'"
                        :value.sync="value.property.subject"
                ></variables-field>

                <variables-field
                        :label="'Body'"
                        :hint="'Email\'s body content'"
                        :value.sync="value.property.body"
                ></variables-field>

                <variables-field
                        :label="'Attachments'"
                        :hint="'List of filepaths to attach to the email (either as comma-separated or as list object)'"
                        :value.sync="value.property.attachments"
                ></variables-field>

                <v-switch
                        v-model="value.property.html"
                        label="Html"
                        hint="if the message\'s content is in HTML format'"
                        persistent-hint
                        class="py-0 mb-6"
                ></v-switch>

                <variables-field
                        :label="'Images'"
                        :hint="'List of filepaths for inline (either as comma-separated or as list object)'"
                        :value.sync="value.property.images"
                ></variables-field>

                <variables-field
                        :label="'CC'"
                        :hint="'List of email addresses for the email\'s \'CC\' field (either as comma-separated or as list object)'"
                        :value.sync="value.property.cc"
                ></variables-field>

                <variables-field
                        :label="'BCC'"
                        :hint="'List of email addresses for the email\'s \'BCC\' field (either as comma-separated or as list object)'"
                        :value.sync="value.property.bcc"
                ></variables-field>

                <variables-field
                        :label="'Attachment Position'"
                        :hint="'Content position for attachment, default is Top'"
                        :value.sync="value.property.attachmentposition"
                ></variables-field>

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
    
    export default class SendMessagePanel extends Mixins(KeywordPanel) {
    }
</script>