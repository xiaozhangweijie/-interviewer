<template>
  <div class="wrap">
<section class="section">
    <map
      id="map"
      show-location
      :markers="markers"
      :longitude="longitude"
      :latitude="latitude"
    ></map>
      <div class="location" @click="location">
       <image src="../../static/images/location.png"></image>
    </div>
    <div class="right" @click="my">
      <image src="../../static/images/my.png"></image>
    </div>
</section>
    <footer class="footer" @click="look">
      添加面试
    </footer>
  </div>
</template>
<script>
import {mapState, mapActions} from 'vuex';
export default {
  data () {
    return {
   markers:[]
    }
  },

  components: {
   
  },
computed:{
  ...mapState({
      longitude: state=>state.home.longitude,
      latitude: state=>state.home.latitude
    })
},
  methods: {
   look(){
     wx.navigateTo({
       url:"/pages/addInterviews/main"
     })
   },
       ...mapActions({
      location: 'home/getLocation'
    }),
    my(){
      wx.navigateTo({
        url:"/pages/my/main"
      })
    }
  },

  created () {
      
  }
}
</script>

<style scoped lang="scss">
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
.section{
  width:100%;
  height:553px;
 map{
    width:100%;
    height:100%;
 }
 .location{
   width:50px;
   height:50px;
   >image{
    width:100%;
    height:100%;
   }
  position: fixed;
  bottom: 150rpx;
  left: 30rpx;
}
.right{
    width:50px;
   height:50px;
   background:#000;
   border-radius:50%;
   >image{
    width:100%;
    height:100%;
    border-radius:50%;
   }
   position: fixed;
  bottom: 150rpx;
  right: 30rpx;
}
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
