import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Top from "../views/Top.vue";
import AdminTop from "../views/admin/adminTop.vue";
import AdminDayReserve from "../views/admin/adminDayReserve.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Top",
    component: Top,
  },
  {
    path: "/adminTop",
    name: "AdminTop",
    component: AdminTop,
  },
  {
    path: "/adminDayReserve",
    name: "AdminDayReserve",
    component: AdminDayReserve,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
