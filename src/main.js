import { createApp } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { createPinia } from 'pinia';
import App from "./App.vue";
import router from "./router";

const pinia = createPinia();
const app = createApp(App);
app.use(router);
app.use(pinia);
app.component("RouterLink", RouterLink).component("RouterView", RouterView);
app.mount("#app");
