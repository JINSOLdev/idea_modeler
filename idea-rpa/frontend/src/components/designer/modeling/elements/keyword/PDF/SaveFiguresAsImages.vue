<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class SaveFiguresAsImages extends Mixins(KeywordElement) {
        mounted() {
            this.value.property.returnVal = [{
                value: 'images_filenames'
            }]

            this.value.property.source_path="None"
            this.value.property.images_folder="."
            this.value.property.pages="None"
        }

    }
</script>