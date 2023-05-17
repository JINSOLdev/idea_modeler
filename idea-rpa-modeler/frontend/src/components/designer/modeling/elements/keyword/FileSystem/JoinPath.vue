<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class JoinPath extends Mixins(KeywordElement) {
        mounted() {
            this.value.property.returnVal = [{
                value: 'path'
            }]
            
        }
    }
</script>