import Vue from 'vue';
import Vuex from 'vuex';
import CreateLogger from 'vuex/dist/logger';

// 引入store子模块
import home from './modules/home';
import addInterview from './modules/addInterview';
import address from './modules/address';
import tab from './modules/tab';
<<<<<<< HEAD
=======
import add from './modules/add';
>>>>>>> sjxx
Vue.use(Vuex);

l
export default new Vuex.Store({
  modules: {
    home,
<<<<<<< HEAD
    address,
    tab
=======
    address:address,
    tab,
    add,
    addInterview
>>>>>>> sjxx
  },
  plugins: [CreateLogger()]
})



