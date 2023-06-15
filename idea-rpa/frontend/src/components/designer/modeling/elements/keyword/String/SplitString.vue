<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class SplitString extends Mixins(KeywordElement) {
        mounted() {
            this.init();
        }

        init() {
            var keys = Object.keys(this.value.property)
            if (!keys || keys.length < 1) {
                this.value.property = new Map()
                this.$set(this.value.property, "string", null)
                this.$set(this.value.property, "separator", "None")
                this.$set(this.value.property, "max_split", -1)
                this.$set(this.value.property, "returnVal",  [{
                    defaultValue: "result"
                }])
            }

            if (!this.value.property.hasOwnProperty("separator")) {
                this.$set(this.value.property, "separator", "None")
            }
            if (!this.value.property.hasOwnProperty("max_split")) {
                this.$set(this.value.property, "max_split", -1)
            }
            if (!this.value.property.hasOwnProperty("returnVal")) {
                this.$set(this.value.property, "returnVal", [{
                    defaultValue: "result"
                }])
            }
        }
    }
</script>