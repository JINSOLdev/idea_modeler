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
            if (!this.value.property.hasOwnProperty("returnVal")) {
                this.$set(this.value.property, "returnVal", [{
                    defaultValue: "page_count"
                }])
            }
        }
    }
</script>