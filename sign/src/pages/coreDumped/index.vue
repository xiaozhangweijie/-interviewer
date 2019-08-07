<template>
  <div class="counter-warp">
    <div class="dls" v-for="(item,index) in list" :key="index">
      <div>
        <h3>{{item.company}}</h3><span class="start">{{item.status===1?"已放弃":null}}</span>
      </div>
      <div>而毕竟</div>
      <div>
        <span>面试时间：2019-08-06 17:00</span>
        <span class="end">{{item.remind===-1?"未提醒":null}}</span>
      </div>
    </div>
   </div>
</template>

<script>
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
   })
  },
  created(){
  this.location({status:1,remind:-1});
  }
}
</script>

<style lang="scss">
.counter-warp {
width:100%;
height:100%;
background:#eee;
overflow-y: auto;
}
.dls{
  margin-top:3%;
  width:100%;
  height:126px;
  background:#fff;
  padding:0 10px;
  box-sizing:border-box;
  >div:nth-child(1){
    h3{
      font-size:20px;
    }
    .start{
      background:#eee;
      font-size:12px;
      color:#ccc;
      padding:5px 5px;
      box-sizing:border-box;
          }
  }
  >div:nth-child(2){
    color:#ccc;
    font-size:14px;
  }
  >div:nth-child(3){
    span:nth-child(1){
      font-size:14px;
    }
    .end{
      background:rgb(253,239,240);
      color:mediumvioletred;
      font-size:12px;
      padding:5px 5px;
      box-sizing:border-box;
    }
  }
  >div{
    padding:10px 15px;
     box-sizing:border-box;
display:flex;
justify-content: space-between;

  }
}
</style>
