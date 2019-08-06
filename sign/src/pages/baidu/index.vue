<template>
<div>
 <ul class="list">
<li>面试地址：<span>北京市海淀区西二旗</span></li>
<li>面试时间：<span>2019-08-06 17:00</span></li>
<li>联系方式：<span>17803385822</span></li>
<li>是否提醒：<span>未提醒</span></li>
<li>面试状态：<span>未开始</span></li>
<li>取消提醒：</li>
    </ul>
    <div class="btn"> <button>去打卡</button>
    <button>放弃面试</button>   </div>
   
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

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
.list{
    width:100%;
    li{
        height:44px;
        line-height:44px;
        border-top:1px solid #eee;
    }
}
.btn{
    width:100%;
    display:flex;
    button{
        width:45%;
    }
    button:nth-child(1){
        background:blue;
        color:#fff;
    }
    button:nth-child(2){
        background:red;
        color:#fff;
    }
}
</style>