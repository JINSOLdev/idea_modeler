<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class GetInputField extends Mixins(KeywordElement) {
        mounted() {
            this.init();
        }

        init() {
            var keys = Object.keys(this.value.property)
            if (!keys || keys.length < 1) {
                this.value.property = new Map()
                this.$set(this.value.property, "source_path", "None")
                this.$set(this.value.property, "replace_none_value", null)
                this.$set(this.value.property, "encoding", "iso-8859-1")
                this.$set(this.value.property, "returnVal", [{
                    defaultValue: "input_fields"
                }])
            }

            if (!this.value.property.hasOwnProperty("source_path")) {
                this.$set(this.value.property, "source_path", "None")
            }
            if (!this.value.property.hasOwnProperty("encoding")) {
                this.$set(this.value.property, "encoding", "iso-8859-1")
            }
            if (!this.value.property.hasOwnProperty("returnVal")) {
                this.$set(this.value.property, "returnVal", [{
                    defaultValue: "input_fields"
                }])
            }
        }

    }
</script>