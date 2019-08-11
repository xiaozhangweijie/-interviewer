import { postAdd } from "../../service/index";
const state = {
  seccessList: ""
};

const mutations = {
  pushAdd(state, payload) {
    state.seccessList = payload;
  },
  initAddInfo(state, payload) {
    state.address = payload.address;
  }
};
const actions = {
  //添加试题
  async addData({ commit }, payload) {
    let data = await postAdd(payload);
    commit("pushAdd", data);
  }
};

export default {
  namespaced: "add",
  state,
  mutations,
  actions
};
