<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class GetSliceFromList extends Mixins(KeywordElement) {
        mounted() {
            this.init();
        }

        init() {
            var keys = Object.keys(this.value.property)
            if (!keys || keys.length < 1) {
                this.value.property = new Map()
                this.$set(this.value.property, "list", null)
                this.$set(this.value.property, "start", 0)
                this.$set(this.value.property, "end", "None")
                this.$set(this.value.property, "returnVal", [{
                    defaultValue: "values"
                }])
            }

            if (!this.value.property.hasOwnProperty("start")) {
                this.$set(this.value.property, "start", 0)
            }
            if (!this.value.property.hasOwnProperty("end")) {
                this.$set(this.value.property, "end", "None")
            }
            if (!this.value.property.hasOwnProperty("returnVal")) {
                this.$set(this.value.property, "returnVal", [{
                    defaultValue: "values"
                }])
            }
        }
    }
</script>