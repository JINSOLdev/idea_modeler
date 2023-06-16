<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'
    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class Comment extends Mixins(KeywordElement) {
        mounted() {
            this.init()
        }

        init() {
            var keys = Object.keys(this.value.property) 
            if (!keys || keys.length < 1) {
                this.value.property = new Map()
                    this.$set(this.value.property, "input", null)
                    this.$set(this.value.property, "input_type", "text")
                    this.$set(this.value.property, "returnVal", [{
                        defaultValue: "result"
                    }])
            }

            if (!this.value.property.hasOwnProperty("input_type")) {
                this.$set(this.value.property, "input_type", "text")
            }
            if (!this.value.property.hasOwnProperty("returnVal")) {
                this.$set(this.value.property, "returnVal", [{
                    defaultValue: "result"
                }])
            }
        }
    }
</script>