<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class PrintTree extends Mixins(KeywordElement) {
        mounted() {
            this.value.property.max_depth="8"
        }
    }
</script>