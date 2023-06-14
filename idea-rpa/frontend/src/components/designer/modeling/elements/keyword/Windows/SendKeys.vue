<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class SendKeys extends Mixins(KeywordElement) {
        mounted() {
            this.value.property.keys="None"
            this.value.property.interval="0.01"
        }
    }
</script>