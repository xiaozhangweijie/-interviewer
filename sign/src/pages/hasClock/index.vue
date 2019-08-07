<template>
  <div class="counter-warp">
   <div class="bawei">
     <div class="title">
       <span>八维</span>
       <span>已打卡</span>
     </div>
     <p class="titles">北京市海淀区唐家岭57号(进上地西街)</p>
      <div class="title">
       <span>八维</span>
       <span>已打卡</span>
     </div>
   </div>
    <div class="bawei">
     <div class="title">
       <span>八维</span>
       <span>已打卡</span>
     </div>
     <p class="titles">北京市海淀区唐家岭57号(进上地西街)</p>
      <div class="title">
       <span>八维</span>
       <span>已打卡</span>
     </div>
   </div>
    <div class="bawei">
     <div class="title">
       <span>八维</span>
       <span>已打卡</span>
     </div>
     <p class="titles">北京市海淀区唐家岭57号(进上地西街)</p>
      <div class="title">
       <span>八维</span>
       <span>已打卡</span>
     </div>
   </div>
  </div>
</template>

<script>
// Use Vuex
import store from './store'

export default {
  computed: {
    count () {
    
    }
  },
  methods: {
   
  }
}
</script>

<style>
.counter-warp {
 width: 100%;
 height: 100%;
}
.bawei{
  height: 80px;
  line-height: 28px;
  border-top: 3px solid #ccc;
   border-bottom: 3px solid #ccc;
}
.title{
  display: flex;
  justify-content: space-between;
}
</style>
