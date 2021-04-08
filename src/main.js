import { createApp } from "vue";
import VueTelInput from "vue3-tel-input";

import "@/style.scss";
import "vue3-tel-input/dist/vue3-tel-input.css";

import App from "./App.vue";
import router from "./router";

import registerBaseComponents from "@/plugins/registerBaseComponents.js";

const app = createApp(App).use(router);

registerBaseComponents(app);

app.use(VueTelInput);

app.mount("#app");
