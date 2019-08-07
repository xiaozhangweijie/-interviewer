<template>
  <div class="counter-warp">
   <div class="bawei">
     <div class="title">
       <span>花</span>
       <span class="dakas">已打卡</span>
     </div>
     <p class="titles">北京市海淀区唐家岭57号(进上地西街)</p>
      <div class="title">
       <span>面试时间:2019-06-23 23:00</span>
       <span class="daka">未提醒</span>
     </div>
     
   </div>
  <div class="bawei">
     <div class="title">
       <span>啪啪</span>
       <span class="dakas">已打卡</span>
     </div>
     <p class="titles">北京市海淀区唐家岭57号(进上地西街)</p>
      <div class="title">
       <span>面试时间:2019-06-23 23:00</span>
       <span class="daka">未提醒</span>
     </div>
     
   </div>
   <div class="bawei">
     <div class="title">
       <span>啪啪</span>
       <span class="dakas">已打卡</span>
     </div>
     <p class="titles">北京市海淀区唐家岭57号(进上地西街)</p>
      <div class="title">
       <span>面试时间:2019-06-23 23:00</span>
       <span class="daka">未提醒</span>
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
  height: 120px;
  line-height: 37px;
  border-top: 5px solid #ccc;
  
   padding: 0 15px;
}
.title{
  display: flex;
  justify-content: space-between;
}
.titles{
  color: #686868;
  font-size: 15px;
}
.daka{
  height: 25px;
  line-height: 25px;
  margin-top: 5px;

  background: rgba(244,244, 244);
  color: rgba(132,136, 139);
}
.dakas{
    background: rgba(254,240, 240);
    color:rgba(214,115, 114);
     margin-top: 5px;
}
</style>