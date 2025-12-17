// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Login from "@/components/Login.vue";
import VoicePlatform from "@/components/VoicePlatform.vue";
import WorkFlow from "@/components/WorkFlow.vue";
import Aisle from "@/components/Aisle.vue";
import Bin from "@/components/Bin.vue";
import Banana from "@/components/Banana.vue";
import Aisle21 from "@/components/Aisle21.vue";
import Bin2 from "@/components/Bin2.vue";
import Apple from "@/components/Apple.vue";
import Finish from "@/components/Finish.vue";
import aisleforcasepicking from "@/components/Case-picking/Asile.vue";
import binforcasepicking from "@/components/Case-picking/BinforCasePicking.vue";
import sparkPlug from "@/components/Case-picking/sparkPlug.vue";

const routes = [
  { path: "/", name: "Login", component: Login },
  { path: "/voice", name: "VoicePlatform", component: VoicePlatform },
  { path: "/workflow", name: "WorkFlow", component: WorkFlow },
  { path: "/aisle", name: "Aisle", component: Aisle },
  { path: "/bin", name: "Bin", component: Bin },
  { path: "/banana", name: "Banana", component: Banana },
  { path: "/aisle21", name: "Aisle21", component: Aisle21 },
  { path: "/bin2", name: "Bin2", component: Bin2 },
  { path: "/apple", name: "Apple", component: Apple },
  { path: "/finish", name: "Finish", component: Finish },
  {path: "/aislecasepicking", name: "casepicking", component: aisleforcasepicking },
  {path: "/binforcasepicking", name: "binforcasepicking", component: binforcasepicking },
   {path: "/binforcasepicking", name: "binforcasepicking", component: binforcasepicking },
   {path: "/sparkPlug", name: "sparkPlug", component: sparkPlug }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
