<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class IsElementText extends Mixins(KeywordElement) {
        mounted() {
            this.init();
        }

        init() {
            var keys = Object.keys(this.value.property)
            if (!keys || keys.length < 1) {
                this.value.property = new Map()
                this.$set(this.value.property, "locator", null)
                this.$set(this.value.property, "expected", null)
                this.$set(this.value.property, "ignore_case", false)
            }

            if (!this.value.property.hasOwnProperty("ignore_case")) {
                this.$set(this.value.property, "ignore_case", false)
            }
        }
    }
</script>