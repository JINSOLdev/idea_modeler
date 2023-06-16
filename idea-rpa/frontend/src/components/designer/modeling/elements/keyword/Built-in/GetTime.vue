<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class GetTime extends Mixins(KeywordElement) {
        mounted() {
            this.init()
        }

        init() {
            var keys = Object.keys(this.value.property) 
            if (!keys || keys.length < 1) {
                this.value.property = new Map()
                    this.$set(this.value.property, "format", "timestamp")
                    this.$set(this.value.property, "time", "NOW")
            }

            if (!this.value.property.hasOwnProperty("format")) {
                this.$set(this.value.property, "format", "timestamp")
            }
            if (!this.value.property.hasOwnProperty("time")) {
                this.$set(this.value.property, "time", "NOW")
            }
        }
    }
</script>