<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class ReadtablefromCSV extends Mixins(KeywordElement) {
        mounted() {
            this.init();
        }

        init() {
            var keys = Object.keys(this.value.property)
            if (!keys || keys.length < 1) {
                this.value.property = new Map()
                this.$set(this.value.property, "path", null)
                this.$set(this.value.property, "header", null)
                this.$set(this.value.property, "columns", "None")
                this.$set(this.value.property, "dialect", "None")
                this.$set(this.value.property, "delimiters", "None")
                this.$set(this.value.property, "encoding", "None")
                this.$set(this.value.property, "returnVal", [{
                    defaultValue: "table"
                }])
            }

            if (!this.value.property.hasOwnProperty("columns")) {
                this.$set(this.value.property, "columns", "None")
            }
            if (!this.value.property.hasOwnProperty("dialect")) {
                this.$set(this.value.property, "dialect", "None")
            }
            if (!this.value.property.hasOwnProperty("delimiters")) {
                this.$set(this.value.property, "delimiters", "None")
            }
            if (!this.value.property.hasOwnProperty("encoding")) {
                this.$set(this.value.property, "encoding", "None")
            }

            if (!this.value.property.hasOwnProperty("returnVal")) {
                this.$set(this.value.property, "returnVal", [{
                    defaultValue: "table"
                }])
            }
        }
    }
</script>