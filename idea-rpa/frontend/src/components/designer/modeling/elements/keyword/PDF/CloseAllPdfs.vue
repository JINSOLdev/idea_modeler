<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class CloseAllPdfs extends Mixins(KeywordElement) {
        mounted() {
        }
    }
</script>