// 模块所有的状态
import { finger } from "../../service/index";
const state = {
  longitude: "113.324520",
  latitude: "23.099994",
  fing: ""
};

// 模块内的同步改变
const mutations = {
  updateLocation(state, payload) {
    state.longitude = payload.longitude;
    state.latitude = payload.latitude;
  },
  userfing(state, payload) {
    state.fing = payload;
  }
};

// 模块内的异步改变
const actions = {
  getLocation({ commit }, payload) {
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
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
