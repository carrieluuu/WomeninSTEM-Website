import Vue from "vue";
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import App from "./App.vue";
import router from "./router";
import Argon from "./plugins/argon-kit";
import './registerServiceWorker'

Vue.config.productionTip = false;
Vue.use(Vuesax)
Vue.use(Argon);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
