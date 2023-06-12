<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class SetAnchorToElement extends Mixins(KeywordElement) {
        mounted() {
            this.value.property.returnVal = [{
                value: 'success'
            }]

            this.value.property.pagenum="1"
        }
    }
</script>