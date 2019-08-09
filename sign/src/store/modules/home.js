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