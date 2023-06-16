<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class WriteTableToCSV extends Mixins(KeywordElement) {
        mounted() {
            this.init();
        }

        init() {
            var keys = Object.keys(this.value.property)
            if (!keys || keys.length < 1) {
                this.value.property = new Map()
                this.$set(this.value.property, "table", null)
                this.$set(this.value.property, "path", null)
                this.$set(this.value.property, "header", true)
                this.$set(this.value.property, "dialect", "Excel")
                this.$set(this.value.property, "encoding", "None")
                this.$set(this.value.property, "delimiter", ",")
            }

            if (!this.value.property.hasOwnProperty("header")) {
                this.$set(this.value.property, "header", true)
            }
            if (!this.value.property.hasOwnProperty("dialect")) {
                this.$set(this.value.property, "dialect", "Excel")
            }
            if (!this.value.property.hasOwnProperty("encoding")) {
                this.$set(this.value.property, "encoding", "None")
            }
            if (!this.value.property.hasOwnProperty("delimiter")) {
                this.$set(this.value.property, "delimiter", ",")
            }
        }
    }
</script>