<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class Authorize extends Mixins(KeywordElement) {
        mounted() {
            this.init()
        }

        init() {
            var keys = Object.keys(this.value.property)
            if (!keys || keys.length < 1) {
                this.value.property = new Map()
                this.$set(this.value.property, "account", "None")
                this.$set(this.value.property, "password", "None")
                this.$set(this.value.property, "smtp server", "None")
                this.$set(this.value.property, "imap server", "None")
                this.$set(this.value.property, "smtp port", "None")
                this.$set(this.value.property, "imap port", "None")
                this.$set(this.value.property, "returnVal", [{
                    defaultValue: "token"
                }])
            }

            if (!this.value.property.hasOwnProperty("account")) {
                this.$set(this.value.property, "account", "None")
            }
            if (!this.value.property.hasOwnProperty("password")) {
                this.$set(this.value.property, "password", "None")
            }
            if (!this.value.property.hasOwnProperty("smtp server")) {
                this.$set(this.value.property, "smtp server", "None")
            }
            if (!this.value.property.hasOwnProperty("imap server")) {
                this.$set(this.value.property, "imap server", "None")
            }
            if (!this.value.property.hasOwnProperty("smtp port")) {
                this.$set(this.value.property, "smtp port", "None")
            }
            if (!this.value.property.hasOwnProperty("imap port")) {
                this.$set(this.value.property, "imap port", "None")
            }
            if (!this.value.property.hasOwnProperty("returnVal")) {
                this.$set(this.value.property, "returnVal", [{
                    defaultValue: "token"
                }])
            }
        }
    }
</script>