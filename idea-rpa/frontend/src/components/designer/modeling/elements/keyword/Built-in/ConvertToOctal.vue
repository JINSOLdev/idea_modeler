<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class ConvertToOctal extends Mixins(KeywordElement) {
        mounted() {
            this.init();
        }

        init() {
            var keys = Object.keys(this.value.property)
            if (!keys || keys.length < 1) {
                this.value.property = new Map()
                this.$set(this.value.property, "item", null)
                this.$set(this.value.property, "base", "None")
                this.$set(this.value.property, "prefix", "None")
                this.$set(this.value.property, "length", "None")
                this.$set(this.value.property, "returnVal", [{
                    defaultValue: "result"
                }])
            }

            if (!this.value.property.hasOwnProperty("base")) {
                this.$set(this.value.property, "base", "None")
            }
            if (!this.value.property.hasOwnProperty("prefix")) {
                this.$set(this.value.property, "prefix", "None")
            }
            if (!this.value.property.hasOwnProperty("length")) {
                this.$set(this.value.property, "length", "None")
            }
            if (!this.value.property.hasOwnProperty("returnVal")) {
                this.$set(this.value.property, "returnVal", [{
                    defaultValue: "result"
                }])
            }
        }
    }
</script>