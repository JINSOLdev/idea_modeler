<template>
    <div class="row">
      <div class="col-3">
        <h3>Elements</h3>
        <draggable
          class="dragArea list-group"
          :list="elements"
          :group="{ name: 'g1', pull: 'clone', put: false }"
          :clone="cloneTask"
        >
          <div class="list-group-item" v-for="element in elements" :key="element.type">
            {{ element.name }}
          </div>
        </draggable>
      </div>
  
      <div class="col-3">
        <h3>Task: <input type="text" class="form-control" v-model="robot.name"/></h3>
  
          <nested-task :tasks="robot.child" />
  
        <!-- <draggable
          class="dragArea list-group"
          :list="list2"
          group="task"
          @change="log"
        >
          <div class="list-group-item" v-for="element in list2" :key="element.id">
            {{ element.name }}
          </div>
        </draggable> -->
  
  
      </div>
      <div class="col-3">
        <h3>Keywords</h3>
  
          <nested-task :tasks="robot.keywords" />
    
      </div>
      <!-- <rawDisplayer class="col-3" :value="list1" title="List 1" />
  
      <rawDisplayer class="col-3" :value="list2" title="List 2" /> -->
    </div>
</template>
  
<script lang="ts">
  import Draggable from "vuedraggable";
  import NestedTask from "./NestedTask.vue";
  import {Robot, SeqTask, Task, IfTask, ForTask, Keyword, CallKeyword} from "@/types/Task";
  
  import { Watch, Component, Vue } from "vue-property-decorator";
  
@Component({
    components: {
        NestedTask, Draggable
    }
  }
)
export default class RobotDesigner extends Vue {
    private idGlobal: number = 50;

    elements: any[] = [
          {name: "For", type: ForTask},
          {name: "If", type: IfTask},
          {name: "Task", type: Task},
          {name: "CallKeyword", type: CallKeyword},
          {name: "Keyword", type: Keyword},
        ];

    robot: Task = new Robot(4, "Task1", "Task", [
          new ForTask(5, "for", "ForTask", 
            [ new Task(6, "task", "Task") ]
          )
        ])
    ;
    
    @Watch("robot", {immediate: true, deep: true})
    log() {
        window.console.log(this.robot.toRobot(0));
    }

    cloneTask(item: any) {
        console.log(this.robot)
        return new (item.type)(this.idGlobal++, item.name);
        

        // let cloned = item.clone();
        // cloned.id = this.idGlobal++;
        // return cloned;
    }
    
  }
</script>

<style scoped></style>
  