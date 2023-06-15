<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class InsertImageToWorksheet extends Mixins(KeywordElement) {
        mounted() {
            this.init()
        }

        init() {
            var keys = Object.keys(this.value.property)
            if (!keys || keys.length < 1) {
                this.value.property = new Map()
                this.$set(this.value.property, "row", null)
                this.$set(this.value.property, "column", null)
                this.$set(this.value.property, "path", null)
                this.$set(this.value.property, "scale", 1.0)
                this.$set(this.value.property, "name", "None")
            }

            if (!this.value.property.hasOwnProperty("scale")) {
                this.$set(this.value.property, "scale", 1.0)
            }
            if (!this.value.property.hasOwnProperty("name")) {
                this.$set(this.value.property, "name", "None")
            }
        }
    }
</script>