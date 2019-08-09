import Vue from 'vue';
import Vuex from 'vuex';
import CreateLogger from 'vuex/dist/logger';

// 引入store子模块
import home from './modules/home';
import address from './modules/address';
import tab from './modules/tab';
Vue.use(Vuex);

l
export default new Vuex.Store({
  modules: {
    home,
    address,
    tab
  },
  plugins: [CreateLogger()]
})



