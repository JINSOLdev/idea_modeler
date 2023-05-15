<template>

    <draggable tag="ul" :list="tasks" :group="{ name: 'g1' }" handle=".handle">
      <li v-for="(el, idx) in tasks" :key="el.id" class="list-group-item" >
  
        <i class="fa fa-align-justify handle"></i>
  
        <input type="text" class="form-control" v-model="el.name"/>
        <!-- <span>{{ el.name }}</span> -->
  
        <i class="fa fa-times close" @click="removeAt(idx)"></i>
  
        <nested-task  class="dragArea" :tasks="el.child"  v-if="el.child"/>
      </li>
    </draggable>
</template>
<script lang="ts">
  import Draggable from "vuedraggable";
  import {Task} from "@/types/Task";
  import { Component,Prop,  Vue } from "vue-property-decorator";

  @Component({
    components: {
        Draggable
    }
    }
  )
  export default class NestedTask extends Vue {
    @Prop({required: true}) readonly tasks!: Task[];

    removeAt(idx: number) {
        this.tasks.splice(idx, 1);
    }
  }
</script>

<style scoped>
    .dragArea {
        min-height: 50px;
        outline: 1px dashed;
    }
    
    .handle {
        float: left;
        padding-top: 8px;
        padding-bottom: 8px;
    }
    
    .close {
        float: right;
        padding-top: 8px;
        padding-bottom: 8px;
    }
    
    input {
        display: inline-block;
        width: 50%;
    }
    
    .text {
        margin: 20px;
    }
  
</style>
  