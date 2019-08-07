<template>
  <div class="counter-warp">
   <div class="bawei" v-for="(item,index) in list" :key="index">
     <div class="title">
       <span>{{item.company}}</span>
       <span class="daka">{{item.status===0?"已打卡":null}}</span>
     </div>
     <p class="titles">{{address(item.address)}}</p>
      <div class="title">
       <span>面试时间:2019-06-23 23:00</span>
       <span class="daka">{{item.remind===-1?"未提醒":null}}</span>
     </div>
     
   </div>
 
  </div>
</template>

<script>
// Use Vuex
import {mapState, mapActions} from 'vuex';
export default {
  computed: {
  ...mapState({
    list:state=>state.tab.list
  })
  },
  methods: {
   ...mapActions({
     location:"tab/getLocation"
   }),
    address(item){
     let arr=[];
     arr.push(item);
    arr.map(item=>{
      if(item.includes("{")){
        console.log(111);
          //return JSON.parse(item).address
      }else{
        console.log(item);
      }
    })
   }
  },
  created(){
  this.location({status:0,remind:-1});
  
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
  border-top: 3px solid #ccc;
   border-bottom: 3px solid #ccc;
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
  border: 1px solid #ccc;
  background: rgba(233,245, 254);
  color: skyblue;
 
}
</style>