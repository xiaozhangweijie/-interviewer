// 模块所有的状态
import { decrypt } from "../../service/index";
const state = {
 phone:'',
 openid:"",
 info:{}
};

// 模块内的同步改变
const mutations = {
 upUser(state,payload){
     console.log(payload);
     state.openid=payload;
 }
};

// 模块内的异步改变
const actions = {
    async getUser({ commit }, payload) {
        const res = await decrypt(payload);
        console.log("res",res);
        commit("upUser", res);
      }
};
export default {
  namespaced: true,
  state,
  mutations,
  actions
};
