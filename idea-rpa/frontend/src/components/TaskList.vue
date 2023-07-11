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
 
            <v-speed-dial
                    v-model="locationBtn"
                    absolute
                    bottom
                    right
            >
                <template v-slot:activator>
                    <v-btn v-model="locationBtn"
                            fab dark
                            color="primary"
                    >
                        <v-icon v-if="locationBtn">
                            mdi-close
                        </v-icon>
                        <v-icon v-else>
                            mdi-menu
                        </v-icon>
                    </v-btn>
                </template>
 
                <v-tooltip left>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn @click="openTaskDialog"
                                v-bind="attrs"
                                v-on="on"
                                fab 
                                dark 
                                color="green"
                        >
                            <v-icon>mdi-plus</v-icon>
                        </v-btn>
                    </template>
                    <span>Add New Task</span>
                </v-tooltip>
 
                <v-tooltip left>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn @click="openLocationDialog"
                                v-bind="attrs"
                                v-on="on"
                                fab 
                                dark 
                                color="indigo"
                        >
                            <v-icon>mdi-folder-outline</v-icon>
                        </v-btn>
                    </template>
                    <span>Select Task Folder</span>
                </v-tooltip>
 
                <v-tooltip left>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn @click="setDownloadDirectory"
                                v-bind="attrs"
                                v-on="on"
                                fab 
                                dark 
                                color="grey"
                        >
                            <v-icon>mdi-folder-download-outline</v-icon>
                        </v-btn>
                    </template>
                    <span>Download Folder</span>
                </v-tooltip>
            </v-speed-dial>
 
            <!-- Location Dialog -->
            <v-dialog v-model="locationDialog" max-width="600">
                <v-card>
                    <v-card-title>
                        Select Task Folder
                    </v-card-title>
                    <v-card-text class="pb-0">
                        <v-text-field
                                v-model="taskLocation"
                                persistent-placeholder
                                placeholder="/tasks"
                                outlined
                                dense
                                @click="setTaskLocation"
                        >
                            <template v-slot:append>
                                <v-icon @click="setTaskLocation">
                                    mdi-folder-outline
                                </v-icon>
                            </template>
                        </v-text-field>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn @click="locationDialog = false"
                                text
                                color="red"
                        >
                            Cancel
                        </v-btn>
                        <v-btn @click="setTaskList"
                                text
                                color="success"
                        >
                            Open
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
 
            <!-- Task Dialog -->
            <v-dialog v-model="taskDialog" max-width="600">
                <v-card>
                    <v-card-title>
                        New Task Name
                    </v-card-title>
                    <v-card-text class="pb-0">
                        <v-text-field
                                v-model="taskName"
                                @keydown.enter="createNewTask"
                                persistent-placeholder
                                placeholder="New Task"
                                outlined
                                dense
                        ></v-text-field>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn @click="taskDialog = false"
                                text
                                color="red"
                        >
                            Cancel
                        </v-btn>
                        <v-btn @click="createNewTask"
                                text
                                color="success"
                        >
                            Add
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-container>
    </div>
</template>
 
<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';
    import fs from 'fs';
    import axios from 'axios';
    import { Robot } from '@/types/Task';
    const { dialog } = require('electron').remote;
 
    @Component({})
    export default class TaskList extends Vue {
        public lists: any[] = [];
        public taskLocation: string = "";
        public locationDialog: boolean = false;
        public locationBtn: boolean = false;
        public taskDialog: boolean = false;
        public taskName: string = "";
        public systemPath: string = "";
 
        mounted() {
            this.systemPath = __dirname.substring(0, __dirname.lastIndexOf("node_modules"));
            window.localStorage.removeItem("list")
 
            var location: any = window.localStorage.getItem("location")
            if (location && location != null && location != "null"
                    && location != undefined && location != "undefined"
            ) {
                this.taskLocation = location;
            } else {
                this.taskLocation = this.systemPath + "\\tasks";
            }
            
            if (fs.existsSync(this.taskLocation)){ 
                // Exist Path
            } else {
                // Not Exist Path
                fs.mkdirSync(this.taskLocation)
                // Do something
            }
            this.setTaskList();
        }
        downloadModel() {
            const tmp: any = {
                "machine_id": "",
                "file_name": "file"
            }
            axios.get("/common/download/robot", tmp).then(function (data: any) {
                console.log("Donwload Robot")
                console.log(data)
            }) 
        }
        removeFile(task: any) {
            let filtered = this.lists.filter((element) => 
                element.name !== task.name && element.path !== task.path
            );
            this.lists= filtered
 
            fs.rmSync(`${task.path}`, {
                force: true
            })
 
            window.localStorage.setItem("list", JSON.stringify({ 'tasks': this.lists }))
        }
 
        openLocationDialog() {
            this.locationDialog = true;
        }
 
        openTaskDialog() {
            this.taskName = "";
            this.taskDialog = true;
        }
 
        setTaskLocation() {
            let me = this
 
            dialog.showOpenDialog({
                defaultPath: "",
                properties: ["openDirectory"]
            }).then(result => {
                if (result && !result.canceled) {
                    var path: any = result.filePaths.shift()
                    me.taskLocation = path
                    window.localStorage.setItem("location", me.taskLocation)
                }
 
            }).catch(err => {
                console.log(err)
 
            });
        }
 
        setTaskList() {
            let me = this
            try {
                let path = this.taskLocation
                me.lists = [];
                
                if (!fs.existsSync(path)) {
                    return
                }
 
                fs.readdirSync(path).forEach((file) => {
                    if (file.includes(".json")) {
                        me.lists.push({
                            name: file.replace(".json", ""),
                            path: `${me.taskLocation}\\`+ file
                        });
                    }
                });
                me.locationDialog = false;
 
            } catch (e) {
                console.log(e)
            }
        }
 
        createNewTask() {
            let me = this;
            let path = this.taskLocation
            if (!fs.existsSync(path)) {
                return
            }
            const filePath = `${path}\\${me.taskName}.json`;
 
            const hasTask = me.lists.some((item) => 
                me.taskName == "" || (item.name == me.taskName && item.path == filePath)
            )
 
            if (hasTask) {
                return;
 
            } else {
                try {
                    const newTask = new Robot(1, me.taskName, "Task", []);
                    const data = {
                        path: filePath,
                        robot: newTask
                    }
                    fs.writeFileSync(filePath, JSON.stringify(data));
                    me.lists.push({
                        name: me.taskName,
                        path: filePath
                    });
                    me.taskDialog = false;
 
                } catch (e) {
                    console.log(e)
                }
            }
        }
 
        setDownloadDirectory() {
            let me = this
            let dic = "../Download"
            try {
                me.lists = [];
                fs.readdirSync(dic).forEach((file) => {
                    if (file.includes(".json")) {
                        me.lists.push({
                            name: file.replace(".json", ""),
                            path: `${dic}\\`+ file
                        });
                    }
                });
            } catch (e) {
                console.log(e)
            }
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