<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class AddTimeToTime extends Mixins(KeywordElement) {
        mounted() {
            this.init();
        }

        init() {
            var keys = Object.keys(this.value.property)
            if (!keys || keys.length < 1) {
                this.value.property = new Map()
                this.$set(this.value.property, "time1", null)
                this.$set(this.value.property, "time2", null)
                this.$set(this.value.property, "result_format", "number")
                this.$set(this.value.property, "exclude_mills", false)
                this.$set(this.value.property, "returnVal", [{
                    defaultValue: "result"
                }])
            }

            if (!this.value.property.hasOwnProperty("result_format")) {
                this.$set(this.value.property, "result_format", "number")
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