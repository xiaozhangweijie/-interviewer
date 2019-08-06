<template>
  <div class="counter-warp">
    <div class="dls">
      <div>
        <h3>百度</h3><span class="start">未开始</span>
      </div>
      <div>北京市海淀区西二旗</div>
      <div>
        <span>面试时间：2019-08-06 17:00</span>
        <span class="end">未提醒</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
  
  },
  methods: {
   
  }
}
</script>

<style lang="scss">
.counter-warp {
width:100%;
height:100%;
background:#eee;
}
.dls{
  margin-top:3%;
  width:100%;
  height:auto;
  background:#fff;
  padding:0 10px;
  box-sizing:border-box;
  >div:nth-child(1){
    h3{
      font-size:24px;
    }
    .start{
      background:#eee;
      font-size:12px;
      color:#ccc;
      padding:5px 10px;
      box-sizing:border-box;
          }
  }
  >div:nth-child(2){
    color:#ccc;
    font-size:16px;
  }
  >div:nth-child(3){
    span:nth-child(1){
      font-size:16px;
    }
    .end{
      background:rgb(253,239,240);
      color:mediumvioletred;
      font-size:14px;
      padding:10px 10px;
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
