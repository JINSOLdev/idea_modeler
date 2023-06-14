<template>
    <v-app id="app">
        <!-- <v-app-bar elevation="2" primary>
            <v-btn @click.native="$router.push('/')"></v-btn>
        </v-app-bar>
        <v-main>
            <router-view></router-view>
        </v-main> -->
        <router-view></router-view>
    </v-app>
</template>

<script lang="ts">
    import { Vue, Component } from "vue-property-decorator";
    
    @Component
    export default class App extends Vue {
        mounted() {
            let connection = new WebSocket('ws://ideasolutions.co.kr:8090/bpm/websocket?userId=jinsolkim');///websocket
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
                }
            }
            connection.onopen = () => {
                console.log('Info: WebSocket connection opened.');
            };
        }
    }
</script>

<style>
    .v-application--wrap {
        min-height: 95vh !important;
    }
</style>
