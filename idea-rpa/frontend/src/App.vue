<template>
    <v-app id="app">
        <router-view></router-view>
    </v-app>
</template>

<script lang="ts">
    import { Vue, Component, Mixins } from "vue-property-decorator";
    import ExecutePython from "./components/designer/modeling/elements/util/ExecutePython.vue";
    import { machineId, machineIdSync }  from "node-machine-id";
    const fs = require('fs')
    @Component({components: {
        ExecutePython,
    }})
    export default class App extends Mixins(ExecutePython) {
        mounted() {
            let machine_id = localStorage.getItem("machine_id");
            console.log(machine_id)
            let connection = new WebSocket('ws://ideasolutions.co.kr:8090/bpm/websocket?userId='+machine_id);///websocket
            connection.onmessage = (event) => {
                console.log(event);     
                console.log(event.data)     // taskName1-filePath1, taskName2-filePath2, taskName3-filePath3
                if(event.data === 'taskName1-filePath1') {
                    // New Task.json 파일을 읽어서 robot 실행?
                    console.log('RPA 작업 시작')
                } else if (event.data === 'taskName2-filePath2') {
                    console.log('RPA 작업 두번째 시작')
                } else if (event.data === 'taskName3-filePath3') {
                    console.log('RPA 작업 세번째 시작')
                    this.execute(event.data.script)
                }

                
                

            }
            connection.onopen = () => {
                console.log('Info: WebSocket connection opened.');
            };
        }
    }
</script>

<style>
    .v-application p {
        margin-bottom: 0px !important;
    }

    .selected {
        border: 1px solid #2196F3 !important;
    }
</style>
