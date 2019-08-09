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
      <div>
        <div>
            <span>
            <image src="../../static/images/jinggao.png"></image>
            </span>
            <span>客服中心</span>
        </div>
        <span>> </span>
    </div>
</div>
    </div>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{
choose(){
      wx.navigateTo({
       url:"/pages/index/main"
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
</style>