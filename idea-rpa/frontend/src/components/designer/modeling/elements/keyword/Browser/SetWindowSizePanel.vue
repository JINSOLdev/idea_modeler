<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1">
                Input Arguments
            </v-card-title>

            <v-card-text>
                <variables-field
                        :label="'Width'"
                        :hint="'Width of browser window'"
                        :value.sync="value.property.width"
                        :required="true"
                ></variables-field>

                <variables-field
                        :label="'Height'"
                        :hint="'Height of browser window'"
                        :value.sync="value.property.height"
                        :required="true"
                ></variables-field>
                
                <switch-field
                        :label="'Inner'"
                        :hint="'Resize browsers inner width/height'"
                        :value.sync="value.property.inner"
                ></switch-field>
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
    
    export default class SetWindowSizePanel extends Mixins(KeywordPanel) {
        mounted() {
            var description = "Sets current windows size to given width and height."
            this.$emit("setDescription", description)
        }
    }
</script>