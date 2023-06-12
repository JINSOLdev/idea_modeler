<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class GetInputField extends Mixins(KeywordElement) {
        mounted() {
            this.value.property.returnVal = [{
                value: 'input_fields'
            }]

            this.value.property.source_path="None"
            this.value.property.encoding="iso-8859-1"
        }

    }
</script>