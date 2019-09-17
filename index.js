import Vue from "/web_modules/vue/dist/vue.esm.browser.js";
import httpVueLoader from "/web_modules/http-vue-loader/src/httpVueLoader.js";
import VueTypeIt from "/plugins/typeit.js";
import VueRemarkable from "/plugins/remarkable.js";

Vue.use(VueRemarkable);
Vue.use(VueTypeIt);
Vue.use(httpVueLoader);

new Vue({
  el: "#app",
  components: {
    app: "url:./components/app.vue",
  },
  template: "<app></app>"
});
