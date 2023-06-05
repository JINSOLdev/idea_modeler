<template>
    <div>
        <!-- {{ lists }} -->
        <v-container fluid>
            <v-row dense>
                <v-col v-for="task in lists" :key="task">
                    <v-card>
                        <v-card-title>
                            {{ task }}
                        </v-card-title>
                        
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="green" text 
                                    @click="$router.push({name: 'RobotDesigner', params: {taskName: task}})"
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
        </v-container>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Watch } from 'vue-property-decorator';
    import fs from 'fs';

    @Component({})
    export default class TaskList extends Vue {
        public lists: any[] = [];
        
        mounted() {
            fs.readdirSync('./tasks').forEach((file) => {
                this.lists.push(file.replace('.json', ''));
            });
        }

        removeFile(fileName: string) {
            fs.rmSync(`./tasks/${fileName}.json`, {
                force: true
            })
            let filtered = this.lists.filter((element) => element !== fileName);
            this.lists= filtered
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
