import Vue from 'vue'
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
      path: "/",
      name: "ModelCanvas",
      component: () => import("./components/designer/ModelCanvas.vue")
    },
    {
      path: "/robot",
      name: "RobotDesigner",
      component: () => import("./components/RobotDesigner.vue")
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
