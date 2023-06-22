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
                this.$set(this.value.property, "sender", null)
                this.$set(this.value.property, "recipients", "None")
                this.$set(this.value.property, "subject", null)
                this.$set(this.value.property, "body", null)
                this.$set(this.value.property, "attachments", "None")
                this.$set(this.value.property, "html", false)
                this.$set(this.value.property, "images", "None")
                this.$set(this.value.property, "cc", "None")
                this.$set(this.value.property, "bcc", "None")
                this.$set(this.value.property, "attachment_position", "TOP")
            }

            if (!this.value.property.hasOwnProperty("recipients")) {
                this.$set(this.value.property, "recipients", "None")
            }
            if (!this.value.property.hasOwnProperty("attachments")) {
                this.$set(this.value.property, "attachments", "None")
            }
            if (!this.value.property.hasOwnProperty("html")) {
                this.$set(this.value.property, "html", false)
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
            if (!this.value.property.hasOwnProperty("attachment_position")) {
                this.$set(this.value.property, "attachment_position", "TOP")
            }
        }
    }
</script>