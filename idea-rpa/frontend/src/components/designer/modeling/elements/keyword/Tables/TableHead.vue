<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class TableHead extends Mixins(KeywordElement) {
        mounted() {
            this.init();
        }

        init() {
            var keys = Object.keys(this.value.property)
            if (!keys || keys.length < 1) {
                this.value.property = new Map()
                this.$set(this.value.property, "table", null)
                this.$set(this.value.property, "count", 5)
                this.$set(this.value.property, "as_list", null)
                this.$set(this.value.property, "returnVal", [{
                    defaultValue: "head"
                }])
            }

            if (!this.value.property.hasOwnProperty("count")) {
                this.$set(this.value.property, "count", 5)
            }
            if (!this.value.property.hasOwnProperty("returnVal")) {
                this.$set(this.value.property, "returnVal", [{
                    defaultValue: "head"
                }])
            }
        }
    }
</script>