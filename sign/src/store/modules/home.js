<<<<<<< HEAD
import QQMapWX from '../../utils/qqMap.js';

// 实例化一下
const qqMapSdk = new QQMapWX({
  key: 'UCGBZ-XN5KU-FUNVX-2JHW7-QJG3S-65F5I' // 必填
});

const state = {
  addList:[]
}

const actions = {
  getSuggestion({commit}, payload){
    qqMapSdk.getSuggestion({
      keyword: payload,
      success: res=>{
        console.log('res...', res);
        commit("addList",res.data)
      }
    })
  },
}

const mutations={
  addList(state,payload){
    state.addList=payload
  },
  getSearch(state,payload){
    qqMapSdk.search({
        keyword: payload,
        region:'北京',
        success: function (res) {
            state.dataList=res.data
        },
    })
},
getItem(state,payload){
    state.add.item=payload
},
}


export default {
  namespaced: true,
  state,
  actions,
  mutations
}
=======
// 模块所有的状态
import { finger } from "../../service/index";
const state = {
    longitude: "113.324520",
    latitude: "23.099994",
    fing:""
  }
  
  // 模块内的同步改变
  const mutations = {
    updateLocation(state, payload){
      state.longitude = payload.longitude;
      state.latitude = payload.latitude;
    },userfing(state,payload){
      state.fing=payload;
    }
  }
  
  // 模块内的异步改变
  const actions = {
    getLocation({commit}, payload){
      wx.getLocation({
        type: 'wgs84',
        success (res) {
          console.log('res...', res);
          commit('updateLocation', res);
        }
      })
    },async userfing({commit},payload){
      const res=await finger(payload);
      console.log(res);
      commit("userfing",res)
    }
  }
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions
  }
>>>>>>> 86919db22f7d0d4ed48c05f63d3aee381cfd6ea4
