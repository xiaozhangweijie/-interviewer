<template>
  <div class="wrap">
<section class="section"></section>
    <footer class="footer" @click="look">
      添加面试
    </footer>
  </div>
</template>
<script>

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
       url:"/pages/AddInterviews/main"
     })
   }
  },

  created () {
  }
}
</script>

<style scoped>
*{
  margin:0;
  padding:0;
}
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
