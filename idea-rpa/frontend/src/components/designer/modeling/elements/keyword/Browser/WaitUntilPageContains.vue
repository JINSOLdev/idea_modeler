<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class WaitUntilPageContains extends Mixins(KeywordElement) {
        mounted() {
            this.init();
        }

        init() {
            var keys = Object.keys(this.value.property)
            if (!keys || keys.length < 1) {
                this.value.property = new Map()
                this.$set(this.value.property, "text", null)
                this.$set(this.value.property, "timeout", "None")
                this.$set(this.value.property, "message", "None")
            }

            if (!this.value.property.hasOwnProperty("timeout")) {
                this.$set(this.value.property, "timeout", "None")
            }
            if (!this.value.property.hasOwnProperty("message")) {
                this.$set(this.value.property, "message", "None")
            }
        }
    }
</script>