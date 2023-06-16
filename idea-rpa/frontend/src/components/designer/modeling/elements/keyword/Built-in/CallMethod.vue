<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class CallMethod extends Mixins(KeywordElement) {
        mounted() {
            this.init();
        }

        init() {
            var keys = Object.keys(this.value.property)
            if (!keys || keys.length < 1) {
                this.value.property = new Map()
                this.$set(this.value.property, "object", null)
                this.$set(this.value.property, "method_name", null)
                this.$set(this.value.property, "args", null)
                this.$set(this.value.property, "kwargs", "Name")
                this.$set(this.value.property, "returnVal", [{
                    defaultValue: "value"
                }])
            }

            if (!this.value.property.hasOwnProperty("kwargs")) {
                this.$set(this.value.property, "kwargs", "Name")
            }
            if (!this.value.property.hasOwnProperty("returnVal")) {
                this.$set(this.value.property, "returnVal", [{
                    defaultValue: "value"
                }])
            }
        }
    }
</script>