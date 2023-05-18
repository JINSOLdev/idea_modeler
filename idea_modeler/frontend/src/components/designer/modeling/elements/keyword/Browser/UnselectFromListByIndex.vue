<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class UnselectFromListByIndex extends Mixins(KeywordElement) {
        mounted() {
        }
    }
</script>