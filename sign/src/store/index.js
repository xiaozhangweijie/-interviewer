import Vue from "vue";
import Vuex from "vuex";
import CreateLogger from "vuex/dist/logger";

// 引入store子模块
import home from "./modules/home";
import tab from "./modules/tab";
import user from "./modules/user";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    home,
    tab,
    user
  },
  plugins: [CreateLogger()]
});
