<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class AddFilesToPdf extends Mixins(KeywordElement) {
        mounted() {
            this.init();
        }

        init() {
            var keys = Object.keys(this.value.property)
            if (!keys || keys.length < 1) {
                this.value.property = new Map()
                this.$set(this.value.property, "files", "None")
                this.$set(this.value.property, "target_document", "None")
                this.$set(this.value.property, "append", null)
            }

            if (!this.value.property.hasOwnProperty("files")) {
                this.$set(this.value.property, "files", "None")
            }
            if (!this.value.property.hasOwnProperty("target_document")) {
                this.$set(this.value.property, "target_document", "None")
            }
        }
    }
</script>