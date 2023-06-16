<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class IsAlertPresent extends Mixins(KeywordElement) {
        mounted() {
            this.init();
        }

        init() {
            var keys = Object.keys(this.value.property)
            if (!keys || keys.length < 1) {
                this.value.property = new Map()
                this.$set(this.value.property, "text", "None")
                this.$set(this.value.property, "action", "ACCEPT")
            }

            if (!this.value.property.hasOwnProperty("text")) {
                this.$set(this.value.property, "text", "None")
            }
            if (!this.value.property.hasOwnProperty("action")) {
                this.$set(this.value.property, "action", "ACCEPT")
            }
        }
    }
</script>