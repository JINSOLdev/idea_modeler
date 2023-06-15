<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class CreateWorksheet extends Mixins(KeywordElement) {
        mounted() {
            this.init()
        }

        init() {
            var keys = Object.keys(this.value.property)
            if (!keys || keys.length < 1) {
                this.value.property = new Map()
                this.$set(this.value.property, "name", null)
                this.$set(this.value.property, "content", "None")
                this.$set(this.value.property, "exist_ok", null)
                this.$set(this.value.property, "header", null)
            }

            if (!this.value.property.hasOwnProperty("content")) {
                this.$set(this.value.property, "content", "None")
            }
        }

    }
</script>