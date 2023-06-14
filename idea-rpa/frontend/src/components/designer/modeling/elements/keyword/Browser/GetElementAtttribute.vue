<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class GetElementAttribute extends Mixins(KeywordElement) {
        mounted() {
            this.init();
        }

        init() {
            if (!this.value.property.hasOwnProperty("returnVal")) {
                this.$set(this.value.property, "returnVal", [{
                    defaultValue: "attribute"
                }])
            }
        }
    }
</script>