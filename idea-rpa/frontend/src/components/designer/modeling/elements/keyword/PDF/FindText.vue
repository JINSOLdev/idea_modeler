<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class FindText extends Mixins(KeywordElement) {
        mounted() {
            this.init();
        }

        init() {
            var keys = Object.keys(this.value.property)
            if (!keys || keys.length < 1) {
                this.value.property = new Map()
                this.$set(this.value.property, "locator", null)
                this.$set(this.value.property, "pagenum", 1)
                this.$set(this.value.property, "direction", "right")
                this.$set(this.value.property, "closest_neighbours", 1)
                this.$set(this.value.property, "strict", null)
                this.$set(this.value.property, "regexp", "None")
                this.$set(this.value.property, "trim", null)
                this.$set(this.value.property, "ignorecase", null)
                this.$set(this.value.property, "returnVal", [{
                    defaultValue: "matches"
                }])
            }

            if (!this.value.property.hasOwnProperty("pagenum")) {
                this.$set(this.value.property, "pagenum", 1)
            }
            if (!this.value.property.hasOwnProperty("direction")) {
                this.$set(this.value.property, "direction", "right")
            }
            if (!this.value.property.hasOwnProperty("closest_neighbours")) {
                this.$set(this.value.property, "closest_neighbours", 1)
            }
            if (!this.value.property.hasOwnProperty("regexp")) {
                this.$set(this.value.property, "regexp", "None")
            }

            if (!this.value.property.hasOwnProperty("returnVal")) {
                this.$set(this.value.property, "returnVal", [{
                    defaultValue: "matches"
                }])
            }
        }
    }
</script>