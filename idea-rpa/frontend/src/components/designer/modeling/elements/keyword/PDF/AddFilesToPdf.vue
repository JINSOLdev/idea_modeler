<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class AddFilesToPdf extends Mixins(KeywordElement) {
        mounted() {
            this.value.property.files="None"
            this.value.property.target_document="None"
        }
    }
</script>