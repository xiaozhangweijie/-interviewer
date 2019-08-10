
import { postAdd } from '../../service/index'
const state = {
    seccessList:''
}


const mutations = {
    pushAdd(state, payload) { 
        state.seccessList=payload 
        console.log('pay',payload)
    },
    initAddInfo(state, payload){
        state.address=payload.address
        console.log('....',state.address)
    }
}
const actions = {
   
    //添加试题 
    async addData({ commit }, payload) {
        console.log('999999999999',payload)
        let data = await postAdd(payload)
        console.log('data....',data)
        commit('pushAdd', data)
       
    },
    
  
}

export default {
    namespaced: "add",
    state,
    mutations,
    actions

}