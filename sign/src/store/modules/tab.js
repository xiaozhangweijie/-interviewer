// 模块所有的状态
import { sign, signDetail,updateSignDetail } from "../../service/index";
const state = {
  list: [],
  info: {},
  updata:[]
};

// 模块内的同步改变
const mutations = {
  updateLocation(state, payload) {
    state.list = payload;
  },
  info(state, payload) {
    console.log("state", payload);
    if (payload.address) {
      payload.address = JSON.parse(payload.address);
    }
    payload.start_time = new Date(
      parseInt(payload.start_time * 1)
    ).toLocaleString();
    state.info = payload;
  },updata(state,payload){
    state.updata=payload;
  }
};

// 模块内的异步改变
const actions = {
  async getLocation({ commit }, payload) {
    const res = await sign(payload);
    res.data.forEach(item => {
      item.address = JSON.parse(item.address);
      item.start_time = new Date(parseInt(item.start_time * 1))
        .toLocaleString()
        .replace(/年|月/g, "-")
        .replace(/日/g, "");
    });
    commit("updateLocation", res.data);
  },
  async getSigndetail({ commit }, payload) {
    const res = await signDetail(payload);
    commit("info", res.data);
  },
  async update({commit},payload){
    console.log("updata",payload);
    const res=await updateSignDetail(payload);
    commit("updata",res.data);
  }
};
export default {
  namespaced: true,
  state,
  mutations,
  actions
};
