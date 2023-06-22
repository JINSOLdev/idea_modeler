<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class IsElementDisabled extends Mixins(KeywordElement) {
        mounted() {
            this.init();
        }

        init() {
            var keys = Object.keys(this.value.property)
            if (!keys || keys.length < 1) {
                this.value.property = new Map()
                this.$set(this.value.property, "locator", null)
                this.$set(this.value.property, "missing_ok", true)
            }

            if (!this.value.property.hasOwnProperty("missing_ok")) {
                this.$set(this.value.property, "missing_ok", true)
            }

            if (!this.value.property.hasOwnProperty("returnVal")) {
                this.$set(this.value.property, "returnVal", [{
                    defaultValue: "res"
                }])
            }
        }
    }
</script>