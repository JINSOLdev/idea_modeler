<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class GetCurrentDate extends Mixins(KeywordElement) {
        mounted() {
            this.init();
        }

        init() {
            var keys = Object.keys(this.value.property)
            if (!keys || keys.length < 1) {
                this.value.property = new Map()
                this.$set(this.value.property, "time_zone", "local")
                this.$set(this.value.property, "increment", 0)
                this.$set(this.value.property, "result_format", "timestamp")
                this.$set(this.value.property, "exclude_millis", false)
                this.$set(this.value.property, "returnVal", [{
                    defaultValue: "result"
                }])
            }

            if (!this.value.property.hasOwnProperty("time_zone")) {
                this.$set(this.value.property, "time_zone", "local")
            }
            if (!this.value.property.hasOwnProperty("increment")) {
                this.$set(this.value.property, "increment", 0)
            }
            if (!this.value.property.hasOwnProperty("result_format")) {
                this.$set(this.value.property, "result_format", "timestamp")
            }
            if (!this.value.property.hasOwnProperty("exclude_mills")) {
                this.$set(this.value.property, "exclude_mills", false)
            }
            if (!this.value.property.hasOwnProperty("returnVal")) {
                this.$set(this.value.property, "returnVal", [{
                    defaultValue: "result"
                }])
            }
        }
    }
</script>