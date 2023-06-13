<template>
    <div>
        <!-- {{ lists }} -->
        <v-container fluid>
            <v-row dense>
                <v-col v-for="task in lists" :key="task.path"
                        cols="4"
                >
                    <v-card>
                        <v-card-title>
                            {{ task.name }}
                        </v-card-title>

                        <v-card-text>
                            Path: {{ task.path }}
                        </v-card-text>
                        
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="green" text 
                                    @click="$router.push({
                                        name: 'RobotDesigner', 
                                        params: {
                                            taskName: task.name,
                                            filePath: task.path
                                        }
                                    })"
                            >
                                open
                            </v-btn>
                            <v-btn color="red" text @click="removeFile(task)">
                                delete
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
            <v-btn @click="createNewTask"
                    absolute
                    bottom
                    right
                    fab
                    color="primary"
            >
                <v-icon>mdi-plus</v-icon>
            </v-btn>
        </v-container>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';
    import fs from 'fs';
    import { Robot } from '@/types/Task';
    const { dialog } = require('electron').remote;

    @Component({})
    export default class TaskList extends Vue {
        public lists: any[] = [];

        mounted() {
            var list: any = window.localStorage.getItem("list")
            if (list) {
                list = JSON.parse(list)
                if (list.tasks) {
                    this.lists = list.tasks
                }
            } else {
                fs.readdirSync('./tasks').forEach((file) => {
                    this.lists.push({
                        name: file.replace('.json', ''),
                        path: './tasks/' + file
                    });
                });
                window.localStorage.setItem("list", JSON.stringify({ 'tasks': this.lists }))
            }
        }

        removeFile(task: any) {
            let filtered = this.lists.filter((element) => 
                element.name !== task.name && element.path !== task.path
            );
            this.lists= filtered

            fs.rmSync(`${task.path}`, {
                force: true
            })
        }

        createNewTask() {
            let me = this
            dialog.showSaveDialog({
                defaultPath: "",
                filters: [
                    { name: 'JSON', extensions: ['json'] }
                ]
            }).then(result => {

                if (!result.canceled) {
                    const filePath: any = result.filePath;
                    const tmpArr = filePath.split("\\");
                    const taskName = tmpArr.pop().replace(".json", "");
                    const newTask = new Robot(1, taskName, "Task", []);

                    fs.writeFileSync(filePath, JSON.stringify(newTask));
                    
                    me.lists.push({
                        name: taskName,
                        path: filePath
                    });

                    window.localStorage.setItem("list", JSON.stringify({ 'tasks': me.lists }))
                }

            }).catch(err => {
                console.log(err)

            });
        }
    }
</script>

<style scoped>
  .v-text-field.v-text-field--enclosed .v-text-field__details {
      height: 0px !important;
      margin: 0;
      padding: 0;
  }
</style>
