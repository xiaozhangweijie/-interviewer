// 模块所有的状态
import {sign} from "../../service/index";
const state = {
   list:[]
  }
  
  // 模块内的同步改变
  const mutations = {
    updateLocation(state,payload){
        state.list=payload;
    }
  }
  
  // 模块内的异步改变
  const actions = {
      async  getLocation({commit},payload){
          const res=await sign(payload);
          console.log("res",res.data);
          commit("updateLocation",res.data);
      }
     }
  export default {
    namespaced: true,
    state,
    mutations,
    actions
  }