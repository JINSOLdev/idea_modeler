<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class Sleep extends Mixins(KeywordElement) {
        mounted() {

            this.init()
        }

        init() {
            var keys = Object.keys(this.value.property) 
            if (!keys || keys.length < 1) {
                this.value.property = new Map()
                    this.$set(this.value.property, "time", null)
                    this.$set(this.value.property, "reason", "None")
            }

            if (!this.value.property.hasOwnProperty("reason")) {
                this.$set(this.value.property, "reason", "None")
            }
        }
    }
</script>