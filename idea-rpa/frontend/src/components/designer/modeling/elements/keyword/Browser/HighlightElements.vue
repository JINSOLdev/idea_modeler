<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class HighlightElements extends Mixins(KeywordElement) {
        mounted() {
            this.init();
        }

        init() {
            var keys = Object.keys(this.value.property)
            if (!keys || keys.length < 1) {
                this.value.property = new Map()
                this.$set(this.value.property, "width", "2px")
                this.$set(this.value.property, "style", "dotted")
                this.$set(this.value.property, "color", "blue")
            }

            if (!this.value.property.hasOwnProperty("width")) {
                this.$set(this.value.property, "width", "2px")
            }
            if (!this.value.property.hasOwnProperty("style")) {
                this.$set(this.value.property, "style", "dotted")
            }
            if (!this.value.property.hasOwnProperty("color")) {
                this.$set(this.value.property, "color", "blue")
            }
        }
    }
</script>