import { createApp } from "vue";
import "./style.css";

import App from "./src/App.vue";

import { createMemoryHistory, createRouter } from "vue-router";

import HomeView from "./src/views/HomeView.vue";
import ProjectsView from "./src/views/ProjectsView.vue";
import BlogView from "./src/views/BlogView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/proyectos/:id?", component: ProjectsView },
  { path: "/blog/:id?", component: BlogView },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
