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
            this.init();
        }

        init() {
            var keys = Object.keys(this.value.property)
            if (!keys || keys.length < 1) {
                this.value.property = new Map()
                this.$set(this.value.property, "account", "None")
                this.$set(this.value.property, "password", "None")
                this.$set(this.value.property, "smtp_server", "None")
                this.$set(this.value.property, "imap_server", "None")
                this.$set(this.value.property, "smtp_port", "None")
                this.$set(this.value.property, "imap_port", "None")
                this.$set(this.value.property, "is_oauth", false)
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
            if (!this.value.property.hasOwnProperty("smtp_server")) {
                this.$set(this.value.property, "smtp_server", "None")
            }
            if (!this.value.property.hasOwnProperty("imap_server")) {
                this.$set(this.value.property, "imap_server", "None")
            }
            if (!this.value.property.hasOwnProperty("smtp_port")) {
                this.$set(this.value.property, "smtp_port", "None")
            }
            if (!this.value.property.hasOwnProperty("imap_port")) {
                this.$set(this.value.property, "imap_port", "None")
            }
            if (!this.value.property.hasOwnProperty("is_oauth")) {
                this.$set(this.value.property, "is_oauth", false)
            }
            if (!this.value.property.hasOwnProperty("returnVal")) {
                this.$set(this.value.property, "returnVal", [{
                    defaultValue: "token"
                }])
            }
        }
    }
</script>