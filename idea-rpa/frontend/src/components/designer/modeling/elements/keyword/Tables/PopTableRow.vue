<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class PopTableRow extends Mixins(KeywordElement) {
        mounted() {
            this.init();
        }

        init() {
            var keys = Object.keys(this.value.property)
            if (!keys || keys.length < 1) {
                this.value.property = new Map()
                this.$set(this.value.property, "table", null)
                this.$set(this.value.property, "row", "None")
                this.$set(this.value.property, "returnVal", [{
                    defaultValue: "row"
                }])
            }

            if (!this.value.property.hasOwnProperty("row")) {
                this.$set(this.value.property, "row", "None")
            }
            if (!this.value.property.hasOwnProperty("returnVal")) {
                this.$set(this.value.property, "returnVal", [{
                    defaultValue: "row"
                }])
            }
        }
    }
</script>