import { createApp } from "vue";
import VueTelInput from "vue3-tel-input";

import store from "@/store";

import "vue3-tel-input/dist/vue3-tel-input.css";
import "@/styles/main.scss";

import App from "./App.vue";
import router from "./router";

import registerBaseComponents from "@/plugins/registerBaseComponents.js";

const app = createApp(App).use(router);

registerBaseComponents(app);

const inputOptions = {
  inputOptions: {
    placeholder: "e.g 08174318740",
  },
};

app.use(VueTelInput, inputOptions);
app.use(store);

app.mount("#app");
