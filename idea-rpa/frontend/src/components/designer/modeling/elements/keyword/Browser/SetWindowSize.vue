<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class SetWindowSize extends Mixins(KeywordElement) {
        mounted() {
            this.init();
        }

        init() {
            var keys = Object.keys(this.value.property)
            if (!keys || keys.length < 1) {
                this.value.property = new Map()
                this.$set(this.value.property, "width", null)
                this.$set(this.value.property, "height", null)
                this.$set(this.value.property, "inner", false)
            }

            if (!this.value.property.hasOwnProperty("inner")) {
                this.$set(this.value.property, "inner", false)
            }
        }
    }
</script>