// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Login from "@/components/Login.vue";
import VoicePlatform from "@/components/VoicePlatform.vue";
import WorkFlow from "@/components/WorkFlow.vue";

const routes = [
  { path: "/", name: "Login", component: Login },
  { path: "/voice", name: "VoicePlatform", component: VoicePlatform },
  { path: "/workflow", name: "WorkFlow", component: WorkFlow },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
