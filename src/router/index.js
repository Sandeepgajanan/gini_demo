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

import ScanEquipment from "@/components/MandIflow/ScanEquipment.vue";
import InspectionModel1 from "@/components/MandIflow/Inspection_1.vue";
import InspectionModel2 from "@/components/MandIflow/Inspection_2.vue";
import InspectionModel3 from "@/components/MandIflow/Inspection_3.vue";
import ExternalDamage1 from "@/components/MandIflow/ExternalDamage_1.vue";
import IgnitionStatus from "@/components/MandIflow/IgnitionStatus.vue";
import HeadLamps from "@/components/MandIflow/HeadLamp.vue";
import Indicator from "@/components/MandIflow/Indicator.vue";
import FlatTire from "@/components/MandIflow/FlatTire.vue";
import Pressure from "@/components/MandIflow/Pressure.vue";
import Checklist from "@/components/MandIflow/Checklist.vue";
import Inspection1_finish from "@/components/MandIflow/Inspection1_Finish.vue";

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
   {path: "/sparkPlug", name: "sparkPlug", component: sparkPlug },
     { path: "/scanEquipment", name: "ScanEquipment", component:ScanEquipment },
  { path: "/inspectionModel1", name: "InspectionModel1", component:InspectionModel1},
  { path: "/inspectionModel2", name: "InspectionModel2", component:InspectionModel2},
  { path: "/inspectionModel3", name: "InspectionModel3", component:InspectionModel3},
  { path: "/externalDamage1", name: "ExternalDamage1", component:ExternalDamage1},
  { path: "/ignitionStatus", name: "IgnitionStatus", component:IgnitionStatus},
  { path: "/headLamps", name: "HeadLamps", component:HeadLamps},
  { path: "/indicator", name: "Indicator", component:Indicator},
  { path: "/flatTire", name: "FlatTire", component:FlatTire},
  { path: "/pressure", name: "Pressure", component:Pressure},
  { path: "/checklist", name: "Checklist", component:Checklist}, 
  { path: "/inspection1_finish", name: "Inspection1_finish", component:Inspection1_finish},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
