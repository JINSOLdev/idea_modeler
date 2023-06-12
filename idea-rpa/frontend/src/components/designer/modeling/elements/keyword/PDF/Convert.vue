<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class Convert extends Mixins(KeywordElement) {
        mounted() {
            this.value.property.source_path="None"
            this.value.property.pagenum="None"
        }
    }
</script>