import Vue from 'vue'
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
      path: "/",
      name: "TaskList",
      component: () => import("./components/TaskList.vue")
    },
    {
      path: "/robot/:taskName",
      name: "RobotDesigner",
      component: () => import("./components/designer/ModelCanvas.vue")
    },
    // {
    //   path: "/robot",
    //   name: "RobotDesigner",
    //   component: () => import("./components/RobotDesigner.vue")
    // },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
