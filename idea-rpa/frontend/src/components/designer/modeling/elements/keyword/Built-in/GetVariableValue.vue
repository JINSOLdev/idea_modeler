<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class GetVariableValue extends Mixins(KeywordElement) {
        mounted() {
            this.init();
        }

        init() {
            var keys = Object.keys(this.value.property)
            if (!keys || keys.length < 1) {
                this.value.property = new Map()
                this.$set(this.value.property, "name", null)
                this.$set(this.value.property, "default", "None")
                this.$set(this.value.property, "returnVal", [{
                    defaultValue: "value"
                }])
            }

            if (!this.value.property.hasOwnProperty("default")) {
                this.$set(this.value.property, "default", "None")
            }
            if (!this.value.property.hasOwnProperty("returnVal")) {
                this.$set(this.value.property, "returnVal", [{
                    defaultValue: "value"
                }])
            }
        }
    }
</script>