<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class LogDictionary extends Mixins(KeywordElement) {
        mounted() {
            var keys = Object.keys(this.value.property)
            if (!keys || keys.length < 1) {
                this.value.property = new Map ()
                this.$set(this.value.property, "level", "INFO")
            }

            if (!this.value.property.hasOwnProperty("level")) {
                this.$set(this.value.property, "level", "INFO")
            }
        }
    }
</script>