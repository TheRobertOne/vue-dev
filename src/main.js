import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

// import initWechat from "./common/js/initWechat";
// import maidian from "./common/js/maidian";
window.onload = function() {
  // initWechat();
  // share();
  // maidian(); // 埋点
};

Vue.use(ElementUI);

Vue.config.productionTip = true;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
