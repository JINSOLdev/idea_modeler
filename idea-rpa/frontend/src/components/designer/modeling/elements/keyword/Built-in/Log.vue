<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class Log extends Mixins(KeywordElement) {
        mounted() {
            this.value.property.level = "INFO"
            this.value.property.formatter = "str"
        }
    }
</script>