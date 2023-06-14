<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class SaveFieldValues extends Mixins(KeywordElement) {
        mounted() {
            this.init();
        }

        init() {
            var keys = Object.keys(this.value.property)
            if (!keys || keys.length < 1) {
                this.value.property = new Map()
                this.$set(this.value.property, "source_path", "None")
                this.$set(this.value.property, "output_path", "None")
                this.$set(this.value.property, "newvals", "None")
                this.$set(this.value.property, "use_appearances_writer", null)
            }

            if (!this.value.property.hasOwnProperty("source_path")) {
                this.$set(this.value.property, "source_path", "None")
            }
            if (!this.value.property.hasOwnProperty("output_path")) {
                this.$set(this.value.property, "output_path", "None")
            }
            if (!this.value.property.hasOwnProperty("newvals")) {
                this.$set(this.value.property, "newvals", "None")
            }
        }
    }
</script>