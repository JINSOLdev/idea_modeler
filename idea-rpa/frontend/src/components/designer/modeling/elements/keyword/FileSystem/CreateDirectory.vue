<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class CreateDirectory extends Mixins(KeywordElement) {
        mounted() {
            this.init();
        }

        init() {
            var keys = Object.keys(this.value.property)
            if (!keys || keys.length < 1) {
                this.value.property = new Map()
                this.$set(this.value.property, "path", null)
                this.$set(this.value.property, "parents", false)
                this.$set(this.value.property, "exist_ok", true)
            }

            if (!this.value.property.hasOwnProperty("parents")) {
                this.$set(this.value.property, "parents", false)
            }
            if (!this.value.property.hasOwnProperty("exist_ok")) {
                this.$set(this.value.property, "exist_ok", true)
            }
        }
    }
</script>