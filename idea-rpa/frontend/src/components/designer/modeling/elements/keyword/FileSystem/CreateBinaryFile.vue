<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class CreateBinaryFile extends Mixins(KeywordElement) {
        mounted() {
            this.init();
        }

        init() {
            var keys = Object.keys(this.value.property)
            if (!keys || keys.length < 1) {
                this.value.property = new Map()
                this.$set(this.value.property, "path", null)
                this.$set(this.value.property, "content", "None")
                this.$set(this.value.property, "overwrite", false)
            }

            if (!this.value.property.hasOwnProperty("content")) {
                this.$set(this.value.property, "content", "None")
            }
            if (!this.value.property.hasOwnProperty("overwrite")) {
                this.$set(this.value.property, "overwrite", false)
            }
        }
    }
</script>