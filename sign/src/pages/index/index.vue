<template>
<<<<<<< HEAD
    <div>
dfff
    </div>
=======
  <div class="wrap">
<section class="section"></section>
    <footer class="footer" @click="look">
      添加面试
    </footer>
  </div>
>>>>>>> 03575077748203f671e1af7dfa5cc0f1b760b9d5
</template>
<script>
<<<<<<< HEAD
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
<style scoped lang="">

</style>
=======

export default {
  data () {
    return {
   
    }
  },

  components: {
   
  },

  methods: {
   look(){
     wx.navigateTo({
       url:"/pages/add/main"
     })
   }
  },

  created () {
  }
}
</script>

<style scoped>
html,body{
  width:100%;
  height:100%;
}

.wrap{
  width:100%;
  height:100%;
}
.footer{
  width:100%;
  height:50px;
  line-height:50px;
  background:#000;
  color:#fff;
  text-align: center;
  position:absolute;
  bottom:0;
}
</style>
>>>>>>> 03575077748203f671e1af7dfa5cc0f1b760b9d5
