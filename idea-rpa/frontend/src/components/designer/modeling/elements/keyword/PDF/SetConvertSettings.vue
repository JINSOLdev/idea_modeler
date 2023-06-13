<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class SetConvertSettings extends Mixins(KeywordElement) {
        mounted() {
            this.value.property.line_margin = "None"
            this.value.property.wood_margin = "None"
            this.value.property.char_margin = "None"
        }
    }
</script>