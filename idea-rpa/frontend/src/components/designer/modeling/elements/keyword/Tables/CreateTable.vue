<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class CreateTable extends Mixins(KeywordElement) {
        mounted() {
            this.init();
        }

        init() {
            var keys = Object.keys(this.value.property)
            if (!keys || keys.length < 1) {
                this.value.property = new Map()
                this.$set(this.value.property, "data", "None")
                this.$set(this.value.property, "trim", null)
                this.$set(this.value.property, "columns", "None")
                this.$set(this.value.property, "returnVal", [{
                    defaultValue: "table"
                }])
            }

            if (!this.value.property.hasOwnProperty("data")) {
                this.$set(this.value.property, "data", "None")
            }
            if (!this.value.property.hasOwnProperty("columns")) {
                this.$set(this.value.property, "columns", "None")
            }
            if (!this.value.property.hasOwnProperty("returnVal")) {
                this.$set(this.value.property, "returnVal", [{
                    defaultValue: "table"
                }])
            }
        }
    }
</script>