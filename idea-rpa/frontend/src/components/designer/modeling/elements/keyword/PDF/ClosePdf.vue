<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class ClosePdf extends Mixins(KeywordElement) {
        mounted() {
            this.value.property.source_pdf="None"
        }
    }
</script>