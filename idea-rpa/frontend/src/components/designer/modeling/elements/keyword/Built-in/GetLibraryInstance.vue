<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class GetLibraryInstance extends Mixins(KeywordElement) {
        mounted() {
            this.init()
        }

        init() {
            var keys = Object.keys(this.value.property) 
            if (!keys || keys.length < 1) {
                this.value.property = new Map()
                    this.$set(this.value.property, "name", "None")
                    this.$set(this.value.property, "all", null)
                    this.$set(this.value.property, "returnVal", [{
                        defaultValue: "instance"
                    }])
            }

            if (!this.value.property.hasOwnProperty("name")) {
                this.$set(this.value.property, "name", "None")
            }
            if (!this.value.property.hasOwnProperty("returnVal")) {
                this.$set(this.value.property, "returnVal", [{
                    defaultValue: "instance"
                }])
            }
        }
    }
</script>