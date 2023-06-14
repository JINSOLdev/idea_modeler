<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class GetTextFromPdf extends Mixins(KeywordElement) {
        mounted() {
            this.init();
        }

        init() {
            var keys = Object.keys(this.value.property)
            if (!keys || keys.length < 1) {
                this.value.property = new Map()
                this.$set(this.value.property, "source_path", "None")
                this.$set(this.value.property, "pages", "None")
                this.$set(this.value.property, "details", null)
                this.$set(this.value.property, "trim", null)
                this.$set(this.value.property, "returnVal", [{
                    defaultValue: "text"
                }])
            }

            if (!this.value.property.hasOwnProperty("source_path")) {
                this.$set(this.value.property, "source_path", "None")
            }
            if (!this.value.property.hasOwnProperty("pages")) {
                this.$set(this.value.property, "pages", "None")
            }
            if (!this.value.property.hasOwnProperty("returnVal")) {
                this.$set(this.value.property, "returnVal", [{
                    defaultValue: "text"
                }])
            }
        }
    }
</script>