<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class FindText extends Mixins(KeywordElement) {
        mounted() {
            this.value.property.returnVal = [{
                value: 'matches'
            }]

            this.value.property.pagenum="1"
            this.value.property.direction="right"
            this.value.property.closest_neighbours="1"
            this.value.property.regexp="None"
        }

    }
</script>