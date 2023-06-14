<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class GetDictionaryKeys extends Mixins(KeywordElement) {
        mounted() {
            this.init();
        }

        init() {
            var keys = Object.keys(this.value.property)
            if (!keys || keys.length < 1) {
                this.value.property = new Map()
                this.$set(this.value.property, "dictionary", null)
                this.$set(this.value.property, "sortKeys", true)
                this.$set(this.value.property, "returnVal", [{
                    defaultValue: "keys"
                }])
            }

            if (!this.value.property.hasOwnProperty("sortKeys")) {
                this.$set(this.value.property, "sortKeys", true)
            }
            if (!this.value.property.hasOwnProperty("returnVal")) {
                this.$set(this.value.property, "returnVal", [{
                    defaultValue: "keys"
                }])
            }
        }
    }
</script>