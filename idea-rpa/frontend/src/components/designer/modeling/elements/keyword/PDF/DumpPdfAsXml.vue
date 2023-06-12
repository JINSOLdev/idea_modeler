<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class DumpPdfAsXml extends Mixins(KeywordElement) {
        mounted() {
            this.value.property.returnVal = [{
                value: 'xml_content'
            }]

            this.value.property.source_path="None"
        }

    }
</script>