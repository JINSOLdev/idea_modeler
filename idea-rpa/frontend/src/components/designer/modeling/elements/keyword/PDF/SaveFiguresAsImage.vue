<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class SaveFiguresAsImage extends Mixins(KeywordElement) {
        mounted() {
            this.value.property.returnVal = [{
                value: 'image_file_path'
            }]

            this.value.property.images_folder="."
        }

    }
</script>