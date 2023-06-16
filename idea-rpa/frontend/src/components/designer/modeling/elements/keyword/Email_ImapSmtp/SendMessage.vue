<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class SendMessage extends Mixins(KeywordElement) {
        mounted() {
            this.init();
        }

        init() {
            var keys = Object.keys(this.value.property)
            if (!keys || keys.length < 1) {
                this.value.property = new Map()
                this.$set(this.value.property, "attachments", "None")
                this.$set(this.value.property, "images", "None")
                this.$set(this.value.property, "cc", "None")
                this.$set(this.value.property, "bcc", "None")
                this.$set(this.value.property, "attachment position", "TOP")                
            }

            if (!this.value.property.hasOwnProperty("attachments")) {
                this.$set(this.value.property, "attachments", "None")
            }
            if (!this.value.property.hasOwnProperty("images")) {
                this.$set(this.value.property, "images", "None")
            }
            if (!this.value.property.hasOwnProperty("cc")) {
                this.$set(this.value.property, "cc", "None")
            }
            if (!this.value.property.hasOwnProperty("bcc")) {
                this.$set(this.value.property, "bcc", "None")
            }
            if (!this.value.property.hasOwnProperty("attachment position")) {
                this.$set(this.value.property, "attachment position", "None")
            }
        }
    }
</script>