<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class Download extends Mixins(KeywordElement) {
        mounted() {
            this.init();
        }

        init() {
            var keys = Object.keys(this.value.property)
            if (!keys || keys.length < 1) {
                this.value.property = new Map()
                this.$set(this.value.property, "url", null)
                this.$set(this.value.property, "target_file", "None")
                this.$set(this.value.property, "overwrite", false)
                this.$set(this.value.property, "returnVal", null)
            }

            if (!this.value.property.hasOwnProperty("target_file")) {
                this.$set(this.value.property, "target_file", "None")
            }
            if (!this.value.property.hasOwnProperty("overwrite")) {
                this.$set(this.value.property, "overwrite", false)
            }
        }
    }
</script>