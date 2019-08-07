// 模块所有的状态
import {sign} from "../../service/index";
const state = {
   list:[]
  }
  
  // 模块内的同步改变
  const mutations = {
    updateLocation(state,payload){
      console.log(state.list);
        state.list=payload.list;
    }
  }
  
  // 模块内的异步改变
  const actions = {
      async  getLocation({commit},payload){
          const res=await sign;
          console.log(res);
          commit("updateLocation",res);
      }
    // sign({commit}, payload){
    //   wx.sign({
    //       success(res){
    //           console.log(res);
    //       }
    //   })
    // }
  }
  export default {
    namespaced: true,
    state,
    mutations,
    actions
  }