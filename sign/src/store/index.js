import Vue from "vue";
import Vuex from "vuex";
import CreateLogger from "vuex/dist/logger";

// 引入store子模块
import home from './modules/home';
import addInterview from './modules/addInterview';
import address from './modules/address';
import tab from './modules/tab';
import add from './modules/add';
import user from "./modules/user";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    home,
    address,
    tab,
    add,
    addInterview,
    user
  },
  plugins: [CreateLogger()]
});



