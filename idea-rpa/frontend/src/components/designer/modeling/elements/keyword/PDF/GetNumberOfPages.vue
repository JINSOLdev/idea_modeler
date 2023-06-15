<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class GetNumberOfPages extends Mixins(KeywordElement) {
        mounted() {
            this.init();
        }

        init() {
            var keys = Object.keys(this.value.property)
            if (!keys || keys.length < 1) {
                this.$set(this.value.property, "source_path", "None")
                this.$set(this.value.property, "returnVal", [{
                    defaultValue: "page_count"
                }])
            }

            if (!this.value.property.hasOwnProperty("returnVal")) {
                this.$set(this.value.property, "returnVal", [{
                    defaultValue: "page_count"
                }])
            }
        }
    }
</script>