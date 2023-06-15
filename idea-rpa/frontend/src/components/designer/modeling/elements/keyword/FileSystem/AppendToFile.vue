
<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class AppendToFile extends Mixins(KeywordElement) {
        mounted() {
            this.init();
        }

        init() {
            var keys = Object.keys(this.value.property)
            if (!keys || keys.length < 1) {
                this.value.property = new Map()
                this.$set(this.value.property, "encoding", "utf-8")
            }

            if (!this.value.property.hasOwnProperty("encoding")) {
                this.$set(this.value.property, "encoding", "utf-8")
            }
        }
    }
</script>