<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class CreateFile extends Mixins(KeywordElement) {
        mounted() {
            this.init();
        }

        init() {
            var keys = Object.keys(this.value.property)
            if (!keys || keys.length < 1) {
                this.value.property = new Map()
                this.$set(this.value.property, "path", null)
                this.$set(this.value.property, "content", "None")
                this.$set(this.value.property, "encoding", "utf-8")
                this.$set(this.value.property, "overwrite", null)
            }

            if (!this.value.property.hasOwnProperty("content")) {
                this.$set(this.value.property, "content", "None")
            }
            if (!this.value.property.hasOwnProperty("encoding")) {
                this.$set(this.value.property, "encoding", "utf-8")
            }
            
        }
    }
</script>