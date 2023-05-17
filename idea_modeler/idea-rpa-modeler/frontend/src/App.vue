<template>
    <v-app id="app">
        <router-view></router-view>
    </v-app>
</template>

<script lang="ts">
    import { Vue, Component } from "vue-property-decorator";
    
    @Component
    export default class App extends Vue {
    }
</script>

<style>
</style>
