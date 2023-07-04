import "./assets/base.css";
import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
// !registers plugin with Vue's developer tools. Makes sure that components are synced to the current state.
app.use(router);

app.mount("#app");
