import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/home.vue";
import EspaciosIndex from "@/views/espacios/index.vue";
//import EspaciosShow from "@/views/espacios/show.vue";

import UbicacionesIndex from "@/views/ubicaciones/index.vue";
import UbicacionesShow from "@/views/ubicaciones/show.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/ubicaciones/:ubicacion_id/espacios",
    name: "Espacios",
    component: EspaciosIndex,
  },
  {
    path: "/empresa/:empresa_id/ubicaciones",
    name: "UbicacionesIndex",
    component: UbicacionesIndex,
  },
  {
    path: "/ubicaciones/:ubicacion_id/espacios",
    name: "UbicacionesShow",
    component: UbicacionesShow,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
