<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class HtmlToPdf extends Mixins(KeywordElement) {
        mounted() {
            this.value.property.encoding="utf-8"
        }
    }
</script>