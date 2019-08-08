<template>
    <div class="wrap">
        <div class="header">
            <p>北京</p>
            <div>
                <input type="text" placeholder="面试地址" v-model="val"  >
            </div>
        </div>
        <div >
            <div class="list"  class-hover="hover" >
                <img src="../../../static/images/location.svg" alt="">
               <div class="text">
                    <p>西二旗[地铁站]</p>
                    <p class="bottom">地铁昌平线,地铁13号线</p>
               </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data(){
        return{
          
        }
    },
    methods:{
     
    },
    computed:{
     
    }
}
</script>
<style scoped>
.wrap{
    width: 100;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.header{
    width: 100%;
    height: 100rpx;
    border-bottom:solid #ccc 1rpx;
    display: flex;
    align-items: center;
}
.header p{
    width: 150rpx;
    border-right: solid #ccc 1rpx;
    text-align: center;
}
.header div{
    margin-left: 20rpx;
}
.active{
    display: none
}
.center{
    width: 100%;
    height: 80%;
}
.list{
    width: 100%;
    height: 100rpx;
    display: flex;
    align-items: center;
    border-bottom:solid #eee 1rpx;
}
.list img{
    width: 50rpx;
    height: 50rpx;
    padding: 20rpx 30rpx;
}
.list .text{
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.bottom{
    font-size: 25rpx;
    color: #ccc;
}
.list:active{
    background: #eee
}
</style>

