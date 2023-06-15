<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class PopTableColumn extends Mixins(KeywordElement) {
        mounted() {
            this.init();
        }

        init() {
            var keys = Object.keys(this.value.property)
            if (!keys || keys.length < 1) {
                this.value.property = new Map()
                this.$set(this.value.property, "table", null)
                this.$set(this.value.property, "column", "None")
                this.$set(this.value.property, "returnVal", [{
                    defaultValue: "column"
                }])
            }

            if (!this.value.property.hasOwnProperty("column")) {
                this.$set(this.value.property, "column", "None")
            }
            if (!this.value.property.hasOwnProperty("returnVal")) {
                this.$set(this.value.property, "returnVal", [{
                    defaultValue: "column"
                }])
            }
        }
    }
</script>