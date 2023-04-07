import Index from "@/pages/index.vue";
import Luck from "@/pages/luck.vue";
import IndexChildren from "@/pages/indexChildren.vue";

const routes = [
  {
    path: "/",
    name: "index",
    title: "首页",
    // component: () => import("@/pages/index.vue"),
    component: Index,
    children: [
      {path: "/index/index", name: "indexChildren", component: IndexChildren},
    ],
  },
  {
    path: "/index/luck",
    name: "luck",
    title: "抽奖",
    // component: () => import("@/pages/luck.vue"),
    component: Luck,
  },
];
export default routes;
