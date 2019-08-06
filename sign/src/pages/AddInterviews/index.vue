<template>
  <div class="counter-warp">
   <p class="title">面试信息</p>
   <div class="install">
    <div class="left">
        公司名称
    </div>
    <div class="right">
        <input type="text" placeholder="请输入公司名称">
    </div>
   </div>
    <div class="install">
    <div class="left">
        公司电话
    </div>
    <div class="right">
        <input type="text" placeholder="请输入面试联系人电话">
    </div>
   </div>
    <div class="install">
    <div class="left">
        面试时间
    </div>
    <div class="right">
        <input type="text" placeholder="请输入公司名称">
    </div>
   </div>
    <div class="install">
    <div class="left">
        面试地址
    </div>
    <div class="right">
        <input type="text" placeholder="请选择面试地址">
    </div>
   </div>
   <div class="beizhu">
       <p class="title">备注信息</p>
       <textarea class="texts" name="" id="" cols="20" rows="30">备注信息(可选,100个字以内)</textarea>
       <button class="btn">确认</button>
   </div>
  </div>

</template>

<script>



export default {
  computed: {
    count () {
    
    }
  },
  methods: {
  
  }
}
</script>

<style scoped>
.counter-warp{
    width: 100%;
    height: 100%;
}
.title{
    padding: 0 15px;
    width: 100%;
    height: 30px;
    background: #eee;
    line-height: 30px;
}
.install{
    margin-top: 20px;
    width: 100%;
    display: flex;
    border-bottom: 1px solid #eee;
    color: #666666;
    padding: 5px 0 ;
}
.left{
    margin-left: 15px;
}
.right{
      margin-left: 20px;
}
.beizhu{
    margin-top: 15px;
    padding: 10px 0;
}
.texts{
    height: 100px;
    margin-top: 15px;
     margin-left: 35px;
    border: 1px solid #ccc;
}
.btn{
    background: #868686;
    margin-top: 15px;
    color: #fff;
}
</style>
