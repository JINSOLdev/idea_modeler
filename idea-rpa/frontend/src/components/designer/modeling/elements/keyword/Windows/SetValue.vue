<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class SetValue extends Mixins(KeywordElement) {
        mounted() {
            this.value.property.value="None"
        }
    }
</script>