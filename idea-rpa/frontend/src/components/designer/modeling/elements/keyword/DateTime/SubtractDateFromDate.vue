<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class SubtractDateFromDate extends Mixins(KeywordElement) {
        mounted() {
            this.init();
        }

        init() {
            var keys = Object.keys(this.value.property)
            if (!keys || keys.length < 1) {
                this.value.property = new Map()
                this.$set(this.value.property, "date1", null)
                this.$set(this.value.property, "date2", null)
                this.$set(this.value.property, "result_format", "number")
                this.$set(this.value.property, "exclude_millis", null)
                this.$set(this.value.property, "date1_format", "None")
                this.$set(this.value.property, "date2_format", "None")
                this.$set(this.value.property, "returnVal", [{
                    defaultValue: "result"
                }])
            }

            if (!this.value.property.hasOwnProperty("result_format")) {
                this.$set(this.value.property, "result_format", "number")
            }
            if (!this.value.property.hasOwnProperty("date1_format")) {
                this.$set(this.value.property, "date1_format", "None")
            }
            if (!this.value.property.hasOwnProperty("date2_format")) {
                this.$set(this.value.property, "date2_format", "None")
            }
            if (!this.value.property.hasOwnProperty("returnVal")) {
                this.$set(this.value.property, "returnVal", [{
                    defaultValue: "result"
                }])
            }
        }
    }
</script>