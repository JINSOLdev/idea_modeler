<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class SendKeys extends Mixins(KeywordElement) {
        mounted() {
            this.init()
        }

        init() {
            var keys = Object.keys(this.value.property)
            if (!keys || keys.length < 1) {
                this.value.property = new Map()
                this.$set(this.value.property, "locator", null)
                this.$set(this.value.property, "keys", "none")
                this.$set(this.value.property, "interval", 0.01)
                this.$set(this.value.property, "send enter", null)
            }

            if (!this.value.property.hasOwnProperty("keys")) {
                this.$set(this.value.property, "keys", "none")
            }
            if (!this.value.property.hasOwnProperty("interval")) {
                this.$set(this.value.property, "interval", 0.01)
            }
        }
    }
</script>