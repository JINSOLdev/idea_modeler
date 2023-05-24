<template>
    <div class="my-1">
        <div v-if="!targetType.includes('If') || 
                (targetType.includes('If') && targetTask.conditions.length == 1)"
        >
            <v-icon>mdi-arrow-down</v-icon>
        </div>
        <div v-else>
            <v-divider 
                    class="if-relation mx-auto"
                    :style="'width:' + lineWidth + 'px'"
            ></v-divider>
            <div class="d-flex">
                <div v-for="(item, idx) in targetTask.conditions" 
                        :key="item.type+idx"
                        class="mx-auto"
                        :class="'condition_arrow_'+targetTask.id"
                >
                    <v-icon>mdi-arrow-down</v-icon>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Prop, Watch } from "vue-property-decorator"

    @Component
    export default class ModelRelation extends Vue {
        @Prop() targetTask!: any

        lineWidth: any = null

        mounted() {

        }

        get targetType() {
            return this.targetTask.type
        }

        @Watch("targetTask.conditions", {immediate: true, deep: true})
        setLineWidth() {
            if (this.targetTask.type.includes('If')) {
                this.$nextTick(() => {
                    var arrows = document.querySelectorAll('.condition_arrow_' + this.targetTask.id)
                    var xList: any[] = []
                    arrows.forEach((arrow: any) => {
                        xList.push(arrow.getBoundingClientRect().x)
                    })
                    
                    var minX = Math.min(...xList)
                    var maxX = Math.max(...xList)

                    this.lineWidth = maxX - minX
                })
            }
        }

    }
</script>

<style scoped>
    .if-relation{
        border: rgba(0,0,0,.54) solid 1px;
        margin-top: 16px;
        margin-bottom: -6px;
    }
</style>