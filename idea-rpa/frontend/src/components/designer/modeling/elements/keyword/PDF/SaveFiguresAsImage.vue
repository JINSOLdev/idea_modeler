<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class SaveFiguresAsImage extends Mixins(KeywordElement) {
        mounted() {
            this.init();
        }

        init() {
            var keys = Object.keys(this.value.property)
            if (!keys || keys.length < 1) {
                this.value.property = new Map()
                this.$set(this.value.property, "figure", null)
                this.$set(this.value.property, "images_folder", ".")
                this.$set(this.value.property, "file_prefix", null)
                this.$set(this.value.property, "returnVal", [{
                    defaultValue: "image_file_path"
                }])
            }

            if (!this.value.property.hasOwnProperty("images_folder")) {
                this.$set(this.value.property, "images_folder", ".")
            }
            if (!this.value.property.hasOwnProperty("returnVal")) {
                this.$set(this.value.property, "returnVal", [{
                    defaultValue: "image_file_path"
                }])
            }
        }
    }
</script>