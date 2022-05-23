import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import "bootstrap/dist/css/bootstrap.css";
import vuetify from "./plugins/vuetify";
import { createProvider } from "./vue-apollo";

new Vue({
  router,
  store,
  vuetify,
  apolloProvider: createProvider(),
  render: (h) => h(App),
}).$mount("#app");
