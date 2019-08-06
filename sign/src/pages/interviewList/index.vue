<template>
  <div class="list-warp">
    <div>sds</div>
  </div>
</template>

<script>
// Use Vuex
import store from './store'

export default {
  computed: {
    count () {
      return store.state.count
    }
  },
  methods: {
    increment () {
      store.commit('increment')
    },
    decrement () {
      store.commit('decrement')
    }
  }
}
</script>

<style>
.list-warp{
  width:100%;
  height: 100rpx;
  background: red;
}
</style>
