// 模块所有的状态
import { sign, signDetail, updateSignDetail } from "../../service/index";
const state = {
  list: [],
  info: {},
  updata: [],
  longitude: "113.324520",
  latitude: "23.099994"
};

// 模块内的同步改变
const mutations = {
  updateLocation(state, payload) {
    state.list = payload;
    console.log("list",state.list);
  },
  info(state, payload) {
    if (payload.address) {
      payload.address = JSON.parse(payload.address);
    }
    payload.start_time = new Date(
      parseInt(payload.start_time * 1)
    ).toLocaleString();
    state.info = payload;
    console.log("state.info",state.info);
    state.longitude = payload.longitude;
    state.latitude = payload.latitude;
  },
  updata(state, payload) {
    state.updata = payload;
  }
};

// 模块内的异步改变
const actions = {
  async getLocation({ commit }, payload) {
    const res = await sign(payload);
    console.log("res",res);
    res.data.map(item => {
      // console.log("item",item)
      if(item.address[0]==="{"){
        item.address = JSON.parse(item.address).address;
      }
      item.start_time = new Date(parseInt(item.start_time * 1)).toLocaleString();
    });
    commit("updateLocation", res.data);
  },
  async getSigndetail({ commit }, payload) {
    const res = await signDetail(payload);
    console.log("info",res.data);
    commit("info", res.data);
  },
  async update({ commit }, payload) {
    console.log("updata", payload);
    const res = await updateSignDetail(payload);
    commit("updata", res.data);
  }
};
export default {
  namespaced: true,
  state,
  mutations,
  actions
};
