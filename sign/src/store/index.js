import Vue from "vue";
import Vuex from "vuex";
import CreateLogger from "vuex/dist/logger";

// 引入store子模块
<<<<<<< HEAD
import home from './modules/home';
import addInterview from './modules/addInterview';
import address from './modules/address';
import tab from './modules/tab';
<<<<<<< HEAD
=======
import add from './modules/add';
>>>>>>> sjxx
=======
import addInterview from './modules/addInterview';
import address from "./modules/address";
import home from "./modules/home";
import tab from "./modules/tab";
import user from "./modules/user";
>>>>>>> 86919db22f7d0d4ed48c05f63d3aee381cfd6ea4
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    home,
<<<<<<< HEAD
<<<<<<< HEAD
    address,
    tab
=======
    address:address,
    tab,
    add,
    addInterview
>>>>>>> sjxx
=======
    tab,
    user,
    addInterview,
    address
>>>>>>> 86919db22f7d0d4ed48c05f63d3aee381cfd6ea4
  },
  plugins: [CreateLogger()]
});



