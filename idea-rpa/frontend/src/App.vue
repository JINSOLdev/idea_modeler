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
            }
            connection.onopen = () => {
                console.log('Info: WebSocket connection opened.');
            };
        }
    }
</script>

<style>
</style>
