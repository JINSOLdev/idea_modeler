<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordElement from '../KeywordElement.vue'

    @Component({
        components: {
            KeywordElement,
        }
    })
    export default class CountValuesInList extends Mixins(KeywordElement) {
        mounted() {
            this.value.proprety = new Map()
            this.value.proprety.set("list_", null)
            this.value.proprety.set("value", null)
            this.value.proprety.set("start", null)
            this.value.proprety.set("end", null)
            this.value.proprety.set("returnVal", null)
            
            this.value.property.start = {
                name: "0",
                valueType: "String",
                defaultValue: "0"
            }
            this.value.property.end = {
                name: "None",
                valueType: "String",
                defaultValue: "None"
            }
            this.value.property.returnVal = [{
                value: 'count'
            }]
        }
    }
</script>