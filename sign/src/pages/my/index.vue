<template>
    <div class="wrap">
<div class="nav">
    <dl>
        <dt><image src="../../static/images/my.png"></image></dt>
        <dd>150****3406</dd>
    </dl>
</div>
<div class="title">
    <div @click="choose">
        <div>
            <span>
            <image src="../../static/images/shizhong-copy.png"></image>
            </span>
            <span>我的面试</span>
        </div>
        <span>> </span>
    </div>
      <div @click="geo">
        <div>
            <span>
            <image src="../../static/images/jinggao.png"></image>
            </span>
            <span>客服中心</span>
        </div>
        <span>> </span>
    </div>
</div>
  <div class="phone" v-if="showPhoneDialog" @click="hideMask" data-id=1>
      <p>为了更好的使用我们的服务，我们需要获取你的手机号码</p>
      <button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">同意</button>
    </div>
    </div>
</template>
<script>
import {mapState, mapActions, mapMutations} from 'vuex'
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            showPhoneDialog:true
        }
    },
    computed:{
        ...mapState({
            phone:state=>state.user.phone
        })
    },
    methods:{
        choose(){
            wx.navigateTo({
            url:"/pages/notBegun/main"
            })
        },  
        hideMask(e){
            if (e.target.dataset.id == 1){
                this.showPhoneDialog =false;
                }
             },
              ...mapActions({
            location: 'user/getUser'
      }),
        getPhoneNumber(e){
            let {iv,encryptedData}=e.target;
            if(encryptedData){
            this.location({iv:iv,
            encryptedData:encryptedData});
             this.showPhoneDialog = false;
            }else{
              this.showPhoneDialog = false;
            }
    },
    geo(){
        wx.navigateTo({
                url:"/pages/geography/main"
            })
    }
    },
   created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
.wrap{
    width:100%;
    height:100%;
}
.nav{
    width:100%;
    height:150px;
     background:#eee;
    >dl{
        position:relative;
        left:40%;
        top:10%;
        dt{
            width:80px;
            height:80px;
            background:#fff;
            border-radius:50%;
            >image{
                width:100%;
                height:100%;
                border-radius:50%;
            }
        }
       
       
     }
}
.title{
width:100%;
>div{
    padding:0 15px;
    box-sizing: border-box;
    display:flex;
    justify-content: space-between;
    margin-top:2%;
    border-bottom:1px solid #eee;
    >div{
        display:flex;
        justify-content: space-around;
            image{
            width:30px;
            height:30px;
        }  
        span{
        padding:0 10px;
         box-sizing: border-box;
         line-height:30px;
        }
    }
    >span{
    }
}
}
.phone{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0, .3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p{
    border-top-left-radius: 20rpx;
    border-top-right-radius: 20rpx;
    width:70%;
    background:#fff;
    padding:20rpx 15rpx;
    line-height: 1.5;
    font-size:34rpx;
    box-sizing:border-box;
  }
  button{
    width: 70%;
    background: #197DBF;
    color: #fff;
    border-bottom-left-radius: 20rpx;
    border-bottom-right-radius: 20rpx;
  }
}
</style>