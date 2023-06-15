<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class EncodeStringToBytes extends Mixins(KeywordElement) {
        mounted() {
            this.init();
        }

        init() {
            var keys = Object.keys(this.value.property)
            if (!keys || keys.length < 1) {
                this.value.property = new Map()
                this.$set(this.value.property, "string", null)
                this.$set(this.value.property, "encoding", null)
                this.$set(this.value.property, "errors", "strict")
                this.$set(this.value.property, "returnVal",  [{
                    defaultValue: "result"
                }])
            }


            if (!this.value.property.hasOwnProperty("errors")) {
                this.$set(this.value.property, "errors", "strict")
            }
            if (!this.value.property.hasOwnProperty("returnVal")) {
                this.$set(this.value.property, "returnVal", [{
                    defaultValue: "result"
                }])
            }
        }
    }
</script>