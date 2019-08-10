import QQMapWX from '../../utils/qqMap.js';

// 实例化一下
const qqMapSdk = new QQMapWX({
  key: 'UCGBZ-XN5KU-FUNVX-2JHW7-QJG3S-65F5I' // 必填
});

const state = {
  addList:[],
  longitude: "113.324520",
  latitude: "23.099994",
  fing: ""
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
  },  getLocation({ commit }, payload) {
    wx.getLocation({
      type: "wgs84",
      success(res) {
        console.log("res...", res);
        commit("updateLocation", res);
      }
    });
  },
  async userfing({ commit }, payload) {
    const res = await finger(payload);
    console.log(res);
    commit("userfing", res);
  }
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
}, updateLocation(state, payload) {
  state.longitude = payload.longitude;
  state.latitude = payload.latitude;
},
userfing(state, payload) {
  state.fing = payload;
}
}


export default {
  namespaced: true,
  state,
  actions,
  mutations
}