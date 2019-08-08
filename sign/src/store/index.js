import Vue from 'vue';
import Vuex from 'vuex';
import CreateLogger from 'vuex/dist/logger';

// 引入store子模块
import home from './modules/home';
<<<<<<< HEAD
import addInterview from './modules/addInterview'
=======
import address from './modules/address';
>>>>>>> sjxx
Vue.use(Vuex);


export default new Vuex.Store({
  modules: {
    home,
<<<<<<< HEAD
    addInterview,
=======
    address
>>>>>>> sjxx
  },
  plugins: [CreateLogger()]
})



