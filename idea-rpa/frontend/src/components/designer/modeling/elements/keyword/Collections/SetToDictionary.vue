<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class SetToDictionary extends Mixins(KeywordElement) {
        mounted() {
            this.init()
        }

        init() {
            var keys = Object.keys(this.value.property) 
            if (!keys || keys.length < 1) {
                this.value.property = new Map()
                    this.$set(this.value.property, "dictionary", null)
                    this.$set(this.value.property, "items", "Name")
            }

            if (!this.value.property.hasOwnProperty("items")) {
                this.$set(this.value.property, "items", "Name")
            }
        }
    }
    
</script>