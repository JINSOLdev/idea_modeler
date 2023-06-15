<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class GenerateRandomString extends Mixins(KeywordElement) {
        mounted() {
            this.init();
        }

        init() {
            var keys = Object.keys(this.value.property)
            if (!keys || keys.length < 1) {
                this.$set(this.value.property, "length", 8)
                this.$set(this.value.property, "chars", "[LETTERS] [NUMBERS]")
                this.$set(this.value.property, "returnVal",  [{
                    defaultValue: "result"
                }])
            }

            if (!this.value.property.hasOwnProperty("length")) {
                this.$set(this.value.property, "length", 8)
            }
            if (!this.value.property.hasOwnProperty("chars")) {
                this.$set(this.value.property, "chars", "[LETTERS][NUMBERS]")
            }
            if (!this.value.property.hasOwnProperty("returnVal")) {
                this.$set(this.value.property, "returnVal", [{
                    defaultValue: "result"
                }])
            }
        }
    }
</script>