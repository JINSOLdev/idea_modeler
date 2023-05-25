<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class GetDictionaryKeys extends Mixins(KeywordElement) {
        mounted() {
            this.value.property.sortKeys = true
            this.value.property.returnVal = [{
                value: 'keys'
            }]
        }
    }
</script>