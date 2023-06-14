<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class SetConvertSettings extends Mixins(KeywordElement) {
        mounted() {
            this.init();
        }

        init() {
            var keys = Object.keys(this.value.property)
            if (!keys || keys.length < 1) {
                this.value.property = new Map()
                this.$set(this.value.property, "line_margin", "None")
                this.$set(this.value.property, "wood_margin", "None")
                this.$set(this.value.property, "char_margin", "None")
            }

            if (!this.value.property.hasOwnProperty("line_margin")) {
                this.$set(this.value.property, "line_margin", "None")
            }
            if (!this.value.property.hasOwnProperty("wood_margin")) {
                this.$set(this.value.property, "wood_margin", "None")
            }
            if (!this.value.property.hasOwnProperty("char_margin")) {
                this.$set(this.value.property, "char_margin", "None")
            }
        }
    }
</script>