<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class AddCookieBrowser extends Mixins(KeywordElement) {
        mounted() {
            this.init()
        }

        init() {
            var keys = Object.keys(this.value.property) 
            if (!keys || keys.length < 1) {
                this.value.property = new Map()
                    this.$set(this.value.property, "name", null)
                    this.$set(this.value.property, "value", null)
                    this.$set(this.value.property, "path", "None")
                    this.$set(this.value.property, "domain", "None")
                    this.$set(this.value.property, "secure", null)
                    this.$set(this.value.property, "expiry", "None")
            }

            if (!this.value.property.hasOwnProperty("path")) {
                this.$set(this.value.property, "path", "None")
            }
            if (!this.value.property.hasOwnProperty("domain")) {
                this.$set(this.value.property, "domain", "None")
            }
            if (!this.value.property.hasOwnProperty("expiry")) {
                this.$set(this.value.property, "expiry", "None")
            }
        }
    }
</script>