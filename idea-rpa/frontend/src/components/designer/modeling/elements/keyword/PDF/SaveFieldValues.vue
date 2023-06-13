<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class SaveFieldValues extends Mixins(KeywordElement) {
        mounted() {
            this.value.property.source_path="None"
            this.value.property.output_path="None"
            this.value.property.newvals="None"
            
        }
    }
</script>