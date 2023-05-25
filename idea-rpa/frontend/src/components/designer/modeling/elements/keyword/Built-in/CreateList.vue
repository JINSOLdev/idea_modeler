<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class CreateList extends Mixins(KeywordElement) {
        mounted() {
            this.value.property.returnVal = [{
                value: 'items'
            }]
        }
    }
</script>