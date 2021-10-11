import { createRouter, createWebHistory } from "vue-router";
import News from "../views/News.vue";
import Search from "../views/Search.vue"

const routes = [
  {
    path: "/",
    name: "News",
    component: News,
  },
  {
    path: "/Search",
    name: "Search",
    component: Search
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
