<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>
            
            <v-card-text>
                <variables-field
                        :label="'Messages'"
                        :hint="'Messages to show in log'"
                        :value.sync="value.property.messages"
                        :isMultiple="true"
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
    export default class CommentPanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Displays the given messages in the log file as keyword arguments."
            this.$emit("setDescription", description)
        }
    }
</script>